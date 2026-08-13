<?php
/**
 * Entry point
 * 
 */

require_once "../config/config.php";

//Cors resolve
header("Access-Control-Allow-Origin: " . FRONTEND_URL);
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

require_once "../routes.php";
