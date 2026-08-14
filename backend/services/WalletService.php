<?php
/**
 * Service is where the business logic goes. For example: 
 * validation
 * checking the address
 * check if the user is allowed to see the wallet
 * calculate the value of the wallet 
 * filter the data 
 * call an external API (e.g. Bitcoin price API)
 * 
 */


class WalletService
{
    private WalletRepository $repository;

    public function __construct(WalletRepository $repository)
    {
        $this->repository = $repository;
    }

    public function getWallets(): array
    {
        return $this->repository->findAll();
    }

    public function getWalletById(int $id): ?array
    {
        $wallet = $this->repository->findById($id);

        if (!$wallet) {
            return null;
        }

        $wallet['assets'] = $this->repository->findAssetsByWalletId($id);
        $wallet['activity'] = $this->repository->findActivityByWalletId($id);

        return $wallet;
    }

    public function create(array $data)
    {
        $wallet = $this->repository->create(
            $data['name'],
            $data['address']
        );

        $walletId = $wallet['id'];

        foreach ($data['assets'] as $asset) {
            $this->repository->createAsset(
                $walletId,
                $asset['symbol'],
                (float) $asset['balance']
            );
        }

        foreach ($data['activity'] as $activity) {
            $this->repository->createActivity(
                $walletId,
                $activity['type'],
                $activity['amount'],
                $activity['date']
            );
        }

        return $wallet;
    }

    public function deleteWallet(int $id): bool
    {
        return $this->repository->deleteWallet($id);
    }
}