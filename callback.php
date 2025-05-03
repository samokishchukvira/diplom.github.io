<?php
require_once('db.php');

$private_key = 'YOUR_PRIVATE_KEY';

$data = $_POST['data'];
$signature = $_POST['signature'];
$decoded = json_decode(base64_decode($data), true);

if ($decoded['status'] == 'subscribed' && isset($decoded['subscribe_id'])) {
    $subscribe_id = $decoded['subscribe_id'];
    $email = $decoded['sender_email'] ?? 'anonymous';

    $stmt = $pdo->prepare("INSERT INTO subscriptions (subscribe_id, email) VALUES (?, ?)");
    $stmt->execute([$subscribe_id, $email]);
}
