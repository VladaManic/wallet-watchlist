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
}