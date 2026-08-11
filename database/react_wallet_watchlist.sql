CREATE DATABASE IF NOT EXISTS react_wallet_watchlist;

USE react_wallet_watchlist;

-- ============================================
-- WALLETS
-- ============================================

CREATE TABLE wallets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- WALLET ASSETS
-- ============================================

CREATE TABLE wallet_assets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    wallet_id INT NOT NULL,
    symbol VARCHAR(20) NOT NULL,
    balance DECIMAL(30, 18) NOT NULL DEFAULT 0,

    FOREIGN KEY (wallet_id)
        REFERENCES wallets(id)
        ON DELETE CASCADE
);

-- ============================================
-- WALLET ACTIVITY
-- ============================================

CREATE TABLE wallet_activity (
    id INT AUTO_INCREMENT PRIMARY KEY,
    wallet_id INT NOT NULL,
    type ENUM('received', 'sent') NOT NULL,
    amount VARCHAR(100) NOT NULL,
    date DATE NOT NULL,

    FOREIGN KEY (wallet_id)
        REFERENCES wallets(id)
        ON DELETE CASCADE
);

-- ============================================
-- WALLETS DATA
-- ============================================

INSERT INTO wallets (name, address)
VALUES
    ('My Wallet', '0x123456789'),
    ('Test Wallet', '0x987654321');

-- ============================================
-- ASSETS DATA
-- ============================================

INSERT INTO wallet_assets (wallet_id, symbol, balance)
VALUES
    (1, 'ETH', 1.54),
    (1, 'USDC', 234),
    (2, 'ETH', 5.21),
    (2, 'USDT', 1250);

-- ============================================
-- ACTIVITY DATA
-- ============================================

INSERT INTO wallet_activity (wallet_id, type, amount, date)
VALUES
    (1, 'received', '0.25 ETH', '2026-08-03'),
    (1, 'sent', '100 USDC', '2026-08-02'),
    (1, 'received', '0.75 ETH', '2026-07-29'),

    (2, 'received', '2 ETH', '2026-08-01'),
    (2, 'sent', '500 USDT', '2026-07-30'),
    (2, 'received', '100 USDT', '2026-07-25');