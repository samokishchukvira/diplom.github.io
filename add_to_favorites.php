<?php
session_start();
header('Content-Type: application/json');

if (!isset($_SESSION['user_id'])) {
    echo json_encode(['success' => false, 'error' => 'not_logged_in']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
$dogName = $data['name'] ?? '';

if ($dogName === '') {
    echo json_encode(['success' => false, 'error' => 'no_name']);
    exit;
}

require_once 'db.php';

$userId = $_SESSION['user_id'];

$stmt = $pdo->prepare("SELECT * FROM favorites WHERE user_id = ? AND dog_name = ?");
$stmt->execute([$userId, $dogName]);

if ($stmt->rowCount() > 0) {
    echo json_encode(['success' => false, 'error' => 'already_added']);
    exit;
}

$insert = $pdo->prepare("INSERT INTO favorites (user_id, dog_name) VALUES (?, ?)");
$insert->execute([$userId, $dogName]);

echo json_encode(['success' => true]);
