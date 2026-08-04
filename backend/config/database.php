<?php

$host = "localhost";
$dbname = "react_wallet_watchlist";
$username = "react_wallet_watchlist";
$password = "z!rcbRSc87G4MfM8";

try {
    $pdo = new PDO(
        "mysql:host=$host;dbname=$dbname",
        $username,
        $password
    );

    $pdo->setAttribute(
        PDO::ATTR_ERRMODE,
        PDO::ERRMODE_EXCEPTION
    );

} catch(PDOException $e) {
    echo json_encode([
        "error" => $e->getMessage()
    ]);
}