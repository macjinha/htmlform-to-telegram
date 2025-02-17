<?php

$token = 'ЗДЕСЬ НАДО УКАЗАТЬ ТОКЕН ВАШЕГО БОТА';
$chat_id = 'ЗДЕСЬ УКАЗЫВАЕТСЯ АЙДИ ЧАТА, В КОТОРЫЙ БОТ ДОЛЖЕН ОТПРАВИТЬ';

$name = $_POST['name'] ?? '';
$phone = $_POST['phone'] ?? '';
$email = $_POST['email'] ?? '';
$telegram = $_POST['telegram'] ?? '';
$message = $_POST['message'] ?? '';

// URL для отправки сообщения
$url = 'https://api.telegram.org/bot' . $token . '/sendMessage';

$params = array(
    'chat_id' => $chat_id,
    'text' => "Новая заявка!\nИмя: {$name}\nТелефон: {$phone}\nEmail: {$email}\nTelegram: {$telegram}\nСообщение:\n{$message}"
);

// Отправляем запрос и получаем ответ
$response = file_get_contents($url . '?' . http_build_query($params));

// Выводим ответ сервера
echo $response;
?>