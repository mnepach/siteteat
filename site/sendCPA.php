<?php

spl_autoload_register('autoload');

function autoload($name)
{
    include_once DIR . '/' . $name . '.php';
}

set_time_limit(0);

$config = include_once DIR . "/SRconfig.php";

header("Content-Type: application/json; charset=utf-8");

if (isset($_POST['name']) && isset($_POST['phone'])) {
    
    $srApi = new SRApi($config['company'], $config['token'], SRApi::API_CPA_SCOPE);

    $utmSource = $_POST['utm_source'] ?? '';
    $utmCampaign = $_POST['utm_campaign'] ?? '';
    $utmMedium = $_POST['utm_medium'] ?? '';
    $utmTerm = $_POST['utm_term'] ?? '';
    $utmContent = $_POST['utm_content'] ?? '';

    $query = "mutation (\$input: AddLeadInput!) {leadMutation {addLead (input: \$input) {id}}}";

    $vars = [
        'input' => [
            'offerId' => $config['offerId'],
            'data' => [
                $config['phoneField'] => $_POST['phone'],
                $config['nameField'] => [
                    'firstName' => $_POST['name'],
                    'lastName' => ''
                ]
            ],
            'source' => [
                'refererUri' => $_SERVER['HTTP_REFERER'] ?? '',
                'ip' => $_SERVER['REMOTE_ADDR'] ?? '',
                'utm_source' => $utmSource,
                'utm_campaign' => $utmCampaign,
                'utm_medium' => $utmMedium,
                'utm_term' => $utmTerm,
                'utm_content' => $utmContent
            ]
        ]
    ];

    if (!empty($config['itemId'])) {
        $quantity = (int)($_POST['quantity'] ?? 1);
        $vars['input']['cart']['items'][] = [
            'itemId' => (int)$config['itemId'],
            'quantity' => $quantity,
            'variation' => 1
        ];

        $pricePerItem = $config['priceItem'];
        if ($quantity >= 3) {
            // Акция 3+1: цена за 3 шт
            $pricePerItem = ($config['priceItem'] * 3) / 4;
        }
        
        $price = (int)round($pricePerItem * 100); // Цена в копейках
        $vars['input']['cart']['items'][0]['price'] = $price;
    }


    $result = $srApi->sendRequest($query, $vars);

    FileLogger::recordsLogs("responseLog.txt", "Request: " . $srApi->jsonEncode($vars));
    FileLogger::recordsLogs("responseLog.txt", "Response: " . $result);

    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $quantity = htmlspecialchars($_POST['quantity'] ?? '1');
    $product = 'Саженцы смородины';
    
    $totalPrice = $config['priceItem'] * (int)$quantity;
    if ((int)$quantity >= 3) {
        $totalPrice = $config['priceItem'] * 3;
        $product .= ' (Акция 3+1)';
    }
    $price = number_format($totalPrice, 2, '.', '') . ' BYN';

    $token = "8184422449:AAESGAsPHbu2TwaSYhRIFxbM9RJHLkavCVA";
    $chat_id = "-1002622903145";
    
    $arr = [
        'Имя пользователя: ' => $name,
        'Телефон: ' => $phone,
        'Товар: ' => $product,
        'Количество: ' => $quantity,
        'Цена: ' => $price
    ];

    $txt = "🛒 Новый заказ:%0A%0A";
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    }

    $sendToTelegram = @fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

    if ($sendToTelegram) {
        fclose($sendToTelegram);
        echo json_encode(['success' => true, 'message' => 'Заказ успешно оформлен']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Ошибка отправки']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Не все поля заполнены']);
}