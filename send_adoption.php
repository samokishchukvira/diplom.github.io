<?php
$host = 'localhost';
$db = 'donations';
$user = 'root';
$pass = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Помилка підключення до бази даних: " . $e->getMessage());
}

$message = '';
$isSuccess = false;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $your_name = trim($_POST['your_name'] ?? '');
    $phone = trim($_POST['phone'] ?? '');
    $dog_name = trim($_POST['dog_name'] ?? '');
    $questions = trim($_POST['questions'] ?? '');
    $reason = trim($_POST['reason'] ?? '');

    if ($your_name === '' || $phone === '') {
        $message = "❗ Будь ласка, заповніть ім’я та номер телефону.";
    } else {
        try {
            $stmt = $pdo->prepare("INSERT INTO adoption_requests (your_name, phone, dog_name, questions, reason) VALUES (:your_name, :phone, :dog_name, :questions, :reason)");
            $stmt->execute([
                ':your_name' => $your_name,
                ':phone' => $phone,
                ':dog_name' => $dog_name,
                ':questions' => $questions,
                ':reason' => $reason
            ]);
            $message = "🎉 Дякуємо! Ваш запит на усиновлення надіслано.";
            $isSuccess = true;
        } catch (PDOException $e) {
            $message = "❗ Сталася помилка при збереженні даних: " . $e->getMessage();
        }
    }
} else {
    $message = "Неправильний метод запиту.";
}
?>

<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8" />
  <title>Результат усиновлення</title>
  <style>
    body {
      background-color: #f46036;
      font-family: 'Montserrat', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background-image: url('images/paws.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100%;
      color: #fff;
      text-align: center;
      padding: 20px;
    }
    .message-box {
      background: rgba(255, 255, 255, 0.15);
      padding: 30px 40px;
      border-radius: 15px;
      box-shadow: 0 0 15px rgba(0,0,0,0.2);
      max-width: 400px;
      user-select: none;
    }
    .message-box.success {
      border: 2px solid #98fb98;
    }
    .message-box.error {
      border: 2px solid #ff6347;
    }
    a {
      display: inline-block;
      margin-top: 25px;
      padding: 12px 24px;
      background: #FFA07A;
      color: #fff;
      border-radius: 30px;
      text-decoration: none;
      font-weight: 600;
      transition: background-color 0.3s ease;
    }
    a:hover {
      background-color: #ff7f50;
    }
  </style>
</head>
<body>
  <div class="message-box <?= $isSuccess ? 'success' : 'error' ?>">
    <h2><?= htmlspecialchars($message) ?></h2>
    <a href="index.html">Повернутися на головну</a>
  </div>
</body>
</html>
