<?php

require_once 'Database/Database.php';
require_once 'Repositories/WalletRepository.php';
require_once 'Services/WalletService.php';
require_once 'Controllers/WalletController.php';

$pdo = Database::getConnection();
$repository = new WalletRepository($pdo);
$service = new WalletService($repository);
$controller = new WalletController($service);
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if ($path === "/api/wallets") {
    $controller->index();
    exit;
}

if (preg_match('#^/api/wallets/(\d+)$#', $path, $matches)) {
    $id = (int) $matches[1];
    $controller->show($id);
    exit;
}

http_response_code(404);

echo json_encode([
    "message" => "Route not found"
]);