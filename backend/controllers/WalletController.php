<?php
/**
 * The Controller is the "entry point" for the API. Its job: 
 * receives the HTTP request 
 * reads the parameters 
 * calls the appropriate service 
 * returns the HTTP response
 * 
 */


class WalletController
{
    private WalletService $service;

    public function __construct(WalletService $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        header("Content-Type: application/json");

        echo json_encode(
            $this->service->getWallets()
        );
    }
}