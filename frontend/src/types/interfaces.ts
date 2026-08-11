export type AssetsObj = {
    symbol: string,
    balance: number,
}

export type ActivityObj = {
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
    wallets: WalletObj[]
    singleWallet:  WalletObj | null
    setWallets: (wallets: WalletObj[]) => void
    setSingleWallet: (wallet: WalletObj) => void
}