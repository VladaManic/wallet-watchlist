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
}