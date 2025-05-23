<?php
session_start();
require_once 'db.php';

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit;
}

$stmt = $pdo->prepare("SELECT * FROM favorites WHERE user_id = ?");
$stmt->execute([$_SESSION['user_id']]);
$favorites = $stmt->fetchAll();
?>
<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8" />
  <title>Улюблені тварини</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
  <style>
    body {
      background-color: #f46036;
      font-family: 'Montserrat', sans-serif;
      min-height: 100vh;
      margin: 0;
      background-image: url('images/paws.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100%;
      color: #fff;
      padding: 40px 20px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      box-sizing: border-box;
    }
    .container {
      background: rgba(255, 255, 255, 0.15);
      padding: 30px 40px;
      border-radius: 15px;
      box-shadow: 0 0 15px rgba(0,0,0,0.2);
      max-width: 900px;
      width: 100%;
      user-select: none;
    }
    h2 {
      text-align: center;
      font-weight: 600;
      font-size: 28px;
      margin: 0 0 30px 0;
      color: #fff;
    }
    .favorites-list {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }
    .dog-card {
      background: rgba(255,255,255,0.25);
      border-radius: 12px;
      padding: 20px;
      width: 180px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;
      position: relative;
      transition: background 0.3s ease;
    }
    .dog-card:hover {
      background: rgba(255,255,255,0.4);
    }
    .dog-card img {
      max-width: 150px;
      border-radius: 12px;
      margin-bottom: 15px;
      object-fit: cover;
      height: 150px;
      width: 150px;
    }
    .dog-card h3 {
      margin: 0 0 10px 0;
      font-weight: 700;
      font-size: 20px;
      text-shadow: 0 0 5px rgba(0,0,0,0.3);
    }
    .dog-like {
      display: flex;
      gap: 10px;
      align-items: center;
    }
    .dog-like i.fa-heart {
      color: #ff5e5e;
      font-size: 24px;
      cursor: pointer;
      user-select: none;
    }
    .dog-like i.fa-heart.liked {
      color: #ff0000;
      text-shadow: 0 0 5px #ff0000;
    }
    .remove-favorite {
      background: #FFA07A;
      border: none;
      color: #fff;
      border-radius: 30px;
      padding: 8px 18px;
      cursor: pointer;
      font-weight: 600;
      font-size: 14px;
      transition: background-color 0.3s ease;
      box-shadow: 0 0 6px rgba(0,0,0,0.1);
    }
    .remove-favorite:hover {
      background-color: #ff7f50;
    }
    @media (max-width: 600px) {
      .favorites-list {
        flex-direction: column;
        align-items: center;
      }
      .dog-card {
        width: 90%;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Улюблені тварини</h2>
    <div class="favorites-list">
      <?php foreach ($favorites as $fav): ?>
        <div class="dog-card favorite-bg" data-dog-name="<?= htmlspecialchars($fav['dog_name']) ?>" data-photo-url="<?= htmlspecialchars($fav['photo_url']) ?>">
          <img src="<?= htmlspecialchars($fav['photo_url']) ?>" alt="<?= htmlspecialchars($fav['dog_name']) ?>" />
          <h3><?= htmlspecialchars($fav['dog_name']) ?></h3>
          <div class="dog-like">
            <i class="fa-heart fa-solid liked"></i>
            <button class="remove-favorite">Видалити</button>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
  </div>

  <script>
    document.querySelectorAll('.remove-favorite').forEach(btn => {
      btn.addEventListener('click', function() {
        const dogCard = this.closest('.dog-card');
        const dogName = dogCard.getAttribute('data-dog-name');

        fetch('toggle_favorite.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ dog_name: dogName, like: false })
        })
        .then(res => res.json())
        .then(data => {
          if(data.success) {
            dogCard.remove();
            alert('Тварину видалено з улюблених');
          } else {
            alert('Помилка: ' + (data.message || 'Невідома помилка'));
          }
        })
        .catch(() => alert('Помилка з’єднання.'));
      });
    });
  </script>
</body>
</html>
