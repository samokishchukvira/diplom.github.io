<?php
session_start();

if (!isset($_POST['animal_id'])) {
    header("Location: index.php");
    exit();
}

$animal_id = $_POST['animal_id'];

if (!isset($_SESSION['user_id'])) {
    $_SESSION['redirect_like'] = $animal_id;
    header("Location: login.php");
    exit();
}

require 'db.php';

$user_id = $_SESSION['user_id'];

$stmt = $pdo->prepare("SELECT * FROM favorites WHERE user_id = ? AND animal_id = ?");
$stmt->execute([$user_id, $animal_id]);

if (!$stmt->fetch()) {
    $insert = $pdo->prepare("INSERT INTO favorites (user_id, animal_id) VALUES (?, ?)");
    $insert->execute([$user_id, $animal_id]);
}

header("Location: favorites.php"); 
exit();
