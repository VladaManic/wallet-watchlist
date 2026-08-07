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
}