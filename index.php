<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit;
}

$userId = $_SESSION['user_id'];

require_once 'db.php'; // Підключення PDO ($pdo)

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['dog_name'])) {
    $dogName = $_POST['dog_name'];

    // Перевіряємо, чи ця собака вже в улюблених користувача
    $stmt = $pdo->prepare("SELECT * FROM favorites WHERE user_id = ? AND dog_name = ?");
    $stmt->execute([$userId, $dogName]);
    $exists = $stmt->fetch();

    if ($exists) {
        // Якщо є — видаляємо
        $stmt = $pdo->prepare("DELETE FROM favorites WHERE user_id = ? AND dog_name = ?");
        $stmt->execute([$userId, $dogName]);
        echo json_encode(['status' => 'removed']);
    } else {
        // Якщо немає — додаємо
        $stmt = $pdo->prepare("INSERT INTO favorites (user_id, dog_name, added_at) VALUES (?, ?, NOW())");
        $stmt->execute([$userId, $dogName]);
        echo json_encode(['status' => 'added']);
    }
    exit;
}

// Завантажуємо всі собаки (приклад, тут можна зробити запит із бази)
// Для простоти — масив з собаками
$dogs = [
    ['id' => 1, 'name' => 'Муна', 'image' => 'images/dog1.png'],
    ['id' => 2, 'name' => 'Рекс', 'image' => 'images/dog2.png'],
    ['id' => 3, 'name' => 'Белла', 'image' => 'images/dog3.png'],
];

// Завантажуємо улюблені собаки користувача
$stmt = $pdo->prepare("SELECT dog_name FROM favorites WHERE user_id = ?");
$stmt->execute([$userId]);
$favoritesDb = $stmt->fetchAll(PDO::FETCH_COLUMN);

// Вивід HTML і JavaScript
?>
<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8" />
    <title>Головна сторінка</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .dog-card {
            display: inline-block;
            width: 180px;
            margin: 10px;
            border: 1px solid #ccc;
            border-radius: 6px;
            padding: 10px;
            text-align: center;
            position: relative;
        }
        .dog-like {
            cursor: pointer;
            font-size: 24px;
            color: #aaa;
            position: absolute;
            top: 10px;
            right: 10px;
            transition: color 0.3s;
        }
        .dog-like.liked {
            color: red;
        }
    </style>
</head>
<body>

<h1>Вітаємо!</h1>
<p>Ось список собак. Натисни на сердечко, щоб додати до улюблених.</p>

<section class="dogs-section">
    <?php foreach ($dogs as $dog): ?>
        <div class="dog-card" data-dog-name="<?= htmlspecialchars($dog['name']) ?>">
            <img src="<?= htmlspecialchars($dog['image']) ?>" alt="Собака <?= htmlspecialchars($dog['name']) ?>" width="160" />
            <div class="dog-info">
                <div class="dog-name"><?= htmlspecialchars($dog['name']) ?></div>
                <div class="dog-like">
                    <i class="fa-regular fa-heart <?= in_array($dog['name'], $favoritesDb) ? 'fa-solid liked' : '' ?>"></i>
                </div>
            </div>
        </div>
    <?php endforeach; ?>
</section>

<script>
    document.querySelectorAll('.dog-like').forEach(heartDiv => {
        heartDiv.addEventListener('click', () => {
            const card = heartDiv.closest('.dog-card');
            const dogName = card.getAttribute('data-dog-name');

            fetch('', {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: new URLSearchParams({dog_name: dogName})
            })
            .then(res => res.json())
            .then(data => {
                const icon = heartDiv.querySelector('i');
                if (data.status === 'added') {
                    icon.classList.remove('fa-regular');
                    icon.classList.add('fa-solid', 'liked');
                } else if (data.status === 'removed') {
                    icon.classList.remove('fa-solid', 'liked');
                    icon.classList.add('fa-regular');
                }
            })
            .catch(err => console.error(err));
        });
    });
</script>

</body>
</html>
