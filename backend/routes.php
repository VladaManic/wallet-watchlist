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
$method = $_SERVER['REQUEST_METHOD'];

//Get all wallets
if ($path === "/api/wallets" && $method === "GET") {
    $controller->index();
    exit;
}

//Get single wallet
if (preg_match('#^/api/wallets/(\d+)$#', $path, $matches)) {
    $id = (int) $matches[1];
    
    if ($method === "GET") {
        $controller->show($id);
        exit;
    }
}

//Add wallet
if ($path === "/api/wallets" && $method === "POST") {
    $controller->store();
    exit;
}

//Delete wallet
if (preg_match('#^/api/wallets/(\d+)$#', $path, $matches)) {
    $id = (int) $matches[1];
    
    if ($method === "DELETE") {
        $controller->delete($id);
        exit;
    }
}

http_response_code(404);

echo json_encode([
    "message" => "Route not found"
]);