<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

session_start();
require_once("db.php");

$message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    if (empty($email) || empty($password)) {
        $message = "Будь ласка, введіть і email, і пароль.";
    } else {
        $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
        $stmt->execute([$email]);

        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($password, $user['password'])) {
            $_SESSION['user_id'] = $user['id'];
            header("Location: index.php");
            exit;
        } else {
            $message = "Неправильний email або пароль.";
        }
    }
}
?>
<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <link rel="icon" href="images/logo-dim-sirka.ico" type="image/x-icon">
    <title>Вхід до світу хвостатих</title>
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
        .register-link {
            margin-top: 25px;
        }
        .register-link a {
            color: #fff;
            text-decoration: none;
            background: #FFA07A;
            padding: 10px 24px;
            border-radius: 30px;
            font-weight: 600;
            transition: background-color 0.3s ease;
            display: inline-block;
        }
        .register-link a:hover {
            background-color: #ff7f50;
        }
        .error-message {
            color: #ff6347;
            font-weight: 600;
            margin-bottom: 15px;
        }
    </style>
</head>
<body>
    <div class="message-box <?= !empty($message) ? 'error' : '' ?>">
        <h2>Вхід у кабінет</h2>
        <?php if (!empty($message)): ?>
            <div class="error-message"><?= htmlspecialchars($message) ?></div>
        <?php endif; ?>
        <form method="POST" action="login.php" novalidate>
            <input type="email" name="email" placeholder="Email" required autocomplete="email" value="<?= isset($email) ? htmlspecialchars($email) : '' ?>">
            <input type="password" name="password" placeholder="Пароль" required autocomplete="current-password">
            <button type="submit">Увійти</button>
        </form>
        <div class="register-link">
            Немає акаунта? <a href="register.php">Зареєструйтеся</a>
        </div>
    </div>
</body>
</html>