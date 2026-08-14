<?php
/**
 * The repository only knows how to talk to the database. Its job: 
 * SELECT 
 * INSERT 
 * UPDATE 
 * DELETE
 * 
 */


class WalletRepository
{
    private PDO $db;

    public function __construct(PDO $db)
    {
        $this->db = $db;
    }

    public function findAll(): array
    {
        $sql = "
            SELECT
                id,
                name,
                address,
                created_at
            FROM wallets
            ORDER BY id DESC
        ";
        $statement = $this->db->query($sql);
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }

    public function findById(int $id): ?array
    {
        $stmt = $this->db->prepare(
            "SELECT id, name, address, created_at
            FROM wallets
            WHERE id = :id"
        );
        $stmt->execute([
            'id' => $id
        ]);
        $wallet = $stmt->fetch(PDO::FETCH_ASSOC);
        return $wallet ?: null;
    }

    //Get assets for single wallet
    public function findAssetsByWalletId(int $walletId): array
    {
        $stmt = $this->db->prepare(
            "SELECT
                id,
                symbol,
                balance
             FROM wallet_assets
             WHERE wallet_id = :wallet_id
             ORDER BY id"
        );

        $stmt->execute([
            'wallet_id' => $walletId
        ]);

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    //Get activity for single wallet
    public function findActivityByWalletId(int $walletId): array
    {
        $stmt = $this->db->prepare(
            "SELECT
                id,
                type,
                amount,
                date
             FROM wallet_activity
             WHERE wallet_id = :wallet_id
             ORDER BY date DESC, id DESC"
        );

        $stmt->execute([
            'wallet_id' => $walletId
        ]);

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    //Insert into 'wallets' table
    public function create(string $name, string $address)
    {
        $sql = "
            INSERT INTO wallets (name, address)
            VALUES (:name, :address)
        ";

        $stmt = $this->db->prepare($sql);

        $stmt->execute([
            ':name' => $name,
            ':address' => $address
        ]);

        $id = (int) $this->db->lastInsertId();

        $stmt = $this->db->prepare("
            SELECT
                id,
                name,
                address,
                created_at
            FROM wallets
            WHERE id = :id
        ");

        $stmt->execute([
            ':id' => $id
        ]);

        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    //Insert into 'wallet_assets' table
    public function createAsset(int $walletId, string $symbol, float $balance): void {
        $sql = "
            INSERT INTO wallet_assets (wallet_id, symbol, balance)
            VALUES (:wallet_id, :symbol, :balance)
        ";

        $stmt = $this->db->prepare($sql);

        $stmt->execute([
            ':wallet_id' => $walletId,
            ':symbol' => $symbol,
            ':balance' => $balance
        ]);
    }

    //Insert into 'wallet_activity' table
    public function createActivity(int $walletId, string $type, string $amount, string $date): void {
        $sql = "
            INSERT INTO wallet_activity (wallet_id, type, amount, date)
            VALUES (:wallet_id, :type, :amount, :date)
        ";

        $stmt = $this->db->prepare($sql);

        $stmt->execute([
            ':wallet_id' => $walletId,
            ':type' => $type,
            ':amount' => $amount,
            ':date' => $date
        ]);
    }

    //Delete wallet
    public function deleteWallet(int $id): bool
    {
        $stmt = $this->db->prepare(
            "DELETE FROM wallets
            WHERE id = :id"
        );

        $stmt->execute([
            'id' => $id
        ]);

        return $stmt->rowCount() > 0;
    }
}