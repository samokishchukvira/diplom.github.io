<?php
session_start();
header('Content-Type: application/json');
require_once 'db.php';

if (!isset($_SESSION['user_id'])) {
    echo json_encode(['success' => false, 'message' => 'Неавторизований доступ']);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['dog_name']) || !isset($data['like'])) {
    echo json_encode(['success' => false, 'message' => 'Некоректні дані']);
    exit;
}

$user_id = $_SESSION['user_id'];
$dog_name = trim($data['dog_name']);
$like = $data['like'];
$photo_url = isset($data['photo_url']) ? trim($data['photo_url']) : '';

try {
    if ($like) {
        $stmt = $pdo->prepare("INSERT IGNORE INTO favorites (user_id, dog_name, photo_url) VALUES (?, ?, ?)");
        $stmt->execute([$user_id, $dog_name, $photo_url]);
    } else {
        $stmt = $pdo->prepare("DELETE FROM favorites WHERE user_id = ? AND dog_name = ?");
        $stmt->execute([$user_id, $dog_name]);
    }
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Помилка сервера: ' . $e->getMessage()]);
}
