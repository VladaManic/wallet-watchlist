<?php

require "../config/database.php";

$query = $pdo->query(
    "SELECT * FROM wallets"
);

$wallets = $query->fetchAll(PDO::FETCH_ASSOC);

header("Content-Type: application/json");

echo json_encode($wallets);