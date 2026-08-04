CREATE DATABASE IF NOT EXISTS react_wallet_watchlist;
USE react_wallet_watchlist; 
CREATE TABLE wallets ( id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100) NOT NULL, address VARCHAR(255) NOT NULL UNIQUE, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ); 
INSERT INTO wallets (name, address) VALUES ('My Wallet', '0x123456789'), ('Test Wallet', '0x987654321');