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

export type WalletsCtxProps = {
    wallets: WalletListItem[]
    singleWallet:  WalletObj | null
    setWallets: (wallets: WalletObj[]) => void
    setSingleWallet: (wallet: WalletObj | null) => void;
}