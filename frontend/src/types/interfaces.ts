export type WalletListItem = {
    id: number;
    name: string;
    address: string;
    created_at: string;
};

export type AssetsObj = {
    id: number,
    symbol: string,
    balance: number,
}

export type ActivityObj = {
    id: number
    type: string,
    amount: string,
    date: string
}

export type WalletObj = {
    id: number,
    name: string,
    address: string,
    created_at: string
    assets: AssetsObj[]
    activity: ActivityObj[]
}

export type WalletObjToAdd = {
    name?: string;
    address?: string;
}

export type WalletsCtxProps = {
    wallets: WalletListItem[]
    singleWallet: WalletObj | null
    assetsList: number[]
    walletObjToAdd: WalletObjToAdd
    setWallets: (wallets: WalletListItem[]) => void
    setSingleWallet: (wallet: WalletObj | null) => void
    setAssetsList: () => void
    setWalletObjToAdd: (wallet: WalletObjToAdd) => void
}