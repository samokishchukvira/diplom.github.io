<?php
require_once('db.php');

$public_key = 'YOUR_PUBLIC_KEY';
$private_key = 'YOUR_PRIVATE_KEY';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $subscribe_id = $_POST['subscribe_id'];

  $params = [
    'action' => 'unsubscribe',
    'version' => '3',
    'public_key' => $public_key,
    'subscribe_id' => $subscribe_id
  ];

  $data = base64_encode(json_encode($params));
  $signature = base64_encode(sha1($private_key . $data . $private_key, 1));

  $ch = curl_init("https://www.liqpay.ua/api/request");
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query([
    'data' => $data,
    'signature' => $signature
  ]));

  $response = curl_exec($ch);
  curl_close($ch);
  $result = json_decode($response, true);

  echo ($result['status'] === 'unsubscribed') ? 'Підписку скасовано.' : 'Помилка.';
}
