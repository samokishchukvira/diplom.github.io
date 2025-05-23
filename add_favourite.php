<?php
session_start();

$isLoggedIn = isset($_SESSION['user_id']);

if (!isset($_SESSION['user_id'])) {
    // Переадресація, якщо не авторизований
    header("Location: login.php?message=Будь ласка, увійдіть, щоб додати улюбленців");
    exit;
}

$host = 'localhost';
$db = 'donations';
$user = 'root';
$pass = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("DB error: " . $e->getMessage());
}

$user_id = $_SESSION['user_id'];
$animal_id = $_POST['animal_id'];
$animal_type = $_POST['animal_type'];

// Додаємо до улюблених
$stmt = $pdo->prepare("INSERT IGNORE INTO favourites (user_id, animal_id, animal_type) VALUES (?, ?, ?)");
$stmt->execute([$user_id, $animal_id, $animal_type]);

header("Location: " . $_SERVER['HTTP_REFERER']);
exit;
