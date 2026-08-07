export type WalletObj = {
    id: number,
    name: string,
    address: string,
    created_at: string
}

export type WalletsCtxProps = {
    wallets: WalletObj[]
    setWallets: (wallets: WalletObj[]) => void
}