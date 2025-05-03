<?php
require_once('db.php'); 

$public_key = 'sandbox_i74048387000';
$private_key = 'sandbox_bHx1WxWASDCXkBMhBMiYHd9PHxIBmaLzQGT4IzKV';

$amount = $_POST['amount'];
$type = $_POST['type']; 
$order_id = uniqid();
$description = $type === 'monthly' ? 'Щомісячна допомога' : 'Разова допомога';

$params = [
  'action' => 'pay',
  'amount' => $amount,
  'currency' => 'UAH',
  'description' => $description,
  'order_id' => $order_id,
  'version' => '3',
  'language' => 'uk',
  'public_key' => $public_key,
  'subscribe' => ($type === 'monthly') ? '1' : null,
  'server_url' => 'https://yourdomain.com/donation/callback.php'
];

if (empty($amount) || floatval($amount) <= 0) {
  die("Гав-гав! Ми раді твоїй допомозі, але спочатку введи суму більшу за 0 грн 🐾");
}

$data = base64_encode(json_encode($params));
$signature = base64_encode(sha1($private_key . $data . $private_key, 1));
?>

<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Донат</title>
  <style>
    body {
      background-color: #f46036;
      font-family: 'Montserrat', sans-serif;
      font-family: sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background-image: url('images/paws.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100%;
    }
    .form-box {
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      text-align: center;
    }
    .form-box input,
    .form-box select {
      padding: 10px;
      margin: 10px;
      width: 200px;
      border: 1px solid #ccc;
      border-radius: 8px;
    }
    .form-box button {
      padding: 12px 24px;
      border: none;
      background: #FFA07A;
      color: #fff;
      border-radius: 30px;
      cursor: pointer;
      font-size: 16px;
      margin-top: 15px;
    }
  </style>
</head>
<body>
  <div class="form-box">
    <?php if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($data) && !empty($signature)): ?>
      <form method="POST" action="https://www.liqpay.ua/api/3/checkout" accept-charset="utf-8">
        <input type="hidden" name="data" value="<?= $data ?>" />
        <input type="hidden" name="signature" value="<?= $signature ?>" />
        <button type="submit">🐾 Перейти до оплати</button>
      </form>
    <?php else: ?>
      <form method="POST">
        <select name="type">
          <option value="one-time">Разова допомога</option>
          <option value="monthly">Щомісячна допомога</option>
        </select><br />
        <input type="number" name="amount" placeholder="Сума (грн)" /><br />
        <button type="submit">Рятую хвостики</button>
      </form>
    <?php endif; ?>
  </div>
</body>
</html>
