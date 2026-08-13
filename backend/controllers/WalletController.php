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

    //Get all wallets
    public function index()
    {
        header("Content-Type: application/json");

        echo json_encode(
            $this->service->getWallets()
        );
    }

    //Get single wallet
    public function show(int $id): void
    {
        $wallet = $this->service->getWalletById($id);

        if (!$wallet) {
            http_response_code(404);

            echo json_encode([
                "message" => "Wallet not found"
            ]);

            return;
        }

        echo json_encode($wallet);
    }

    //Add single wallet
    public function store()
    {
        $data = json_decode(file_get_contents("php://input"), true);

        $wallet = $this->service->create($data);

        http_response_code(201);

        echo json_encode($wallet);
    }
}