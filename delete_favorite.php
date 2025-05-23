<?php
session_start();
require_once("db.php");

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user_id = $_SESSION['user_id'];
    $dog_name = $_POST['dog_name'] ?? '';

    if ($dog_name) {
        $stmt = $pdo->prepare("DELETE FROM favorites WHERE user_id = ? AND dog_name = ?");
        $stmt->execute([$user_id, $dog_name]);
    }
}

header("Location: favorites.php");
exit;
