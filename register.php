<?php
require 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $stmt = $pdo->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
    $stmt->execute([$name, $email, $password]);

    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <link rel="icon" href="images/logo-dim-sirka.ico" type="image/x-icon">
    <title>Реєстрація, щоб стати блище до хвостиків</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
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
            width: 100%;
        }
        .message-box.error {
            border: 2px solid #ff6347;
        }
        h2 {
            margin-top: 0;
            margin-bottom: 25px;
            font-weight: 600;
            font-size: 28px;
            color: #fff;
        }
        input[type="text"],
        input[type="email"],
        input[type="password"] {
            width: 100%;
            padding: 12px 15px;
            margin: 12px 0;
            border-radius: 8px;
            border: none;
            font-size: 16px;
            outline: none;
            box-sizing: border-box;
        }
        button {
            background-color: #FFA07A;
            color: white;
            border: none;
            padding: 12px;
            width: 100%;
            border-radius: 30px;
            font-size: 16px;
            cursor: pointer;
            font-weight: 600;
            transition: background-color 0.3s ease;
            margin-top: 15px;
        }
        button:hover {
            background-color: #ff7f50;
        }
        .login-link {
            margin-top: 25px;
        }
        .login-link a {
            color: #fff;
            text-decoration: none;
            background: #FFA07A;
            padding: 10px 24px;
            border-radius: 30px;
            font-weight: 600;
            transition: background-color 0.3s ease;
            display: inline-block;
        }
        .login-link a:hover {
            background-color: #ff7f50;
        }
    </style>
</head>
<body>
    <div class="message-box">
        <h2>Реєстрація</h2>
        <form method="POST" action="register.php" novalidate>
            <input type="text" name="name" placeholder="Ім'я" required autocomplete="name" />
            <input type="email" name="email" placeholder="Email" required autocomplete="email" />
            <input type="password" name="password" placeholder="Пароль" required autocomplete="new-password" />
            <button type="submit">Зареєструватися</button>
        </form>
        <div class="login-link">
            Вже маєш акаунт? <a href="login.php">Увійти</a>
        </div>
    </div>
</body>
</html>
