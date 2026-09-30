export type WalletListItem = {
    id: number
    name: string
    address: string
    created_at: string
};


export type AssetsObj = {
    id: number
    symbol: string
    balance: number | string
}

export type ActivityObj = {
    id: number
    type: string
    amount: string
    date: string
}

export type WalletObj = {
    id: number
    name: string
    address: string
    created_at: string
    assets: AssetsObj[]
    activity: ActivityObj[]
}


export type WalletObjToAdd = {
    id: number
    name?: string
    address?: string
    assets: AssetsObj[]
    activity: ActivityObj[]
    type: boolean
}


export type WalletsCtxProps = {
    wallets: WalletListItem[]
    singleWallet: WalletObj | null
    walletObjToAdd: WalletObjToAdd
    setWallets: (wallets: WalletListItem[]) => void
    setSingleWallet: (wallet: WalletObj | null) => void
    setWalletObjToAdd: (data: Partial<WalletObjToAdd>) => void
    createAssets: () => void
    updateAssets: (index: number, data: Partial<AssetsObj>) => void
    createActivity: () => void
    updateActivity: (index: number, data: Partial<ActivityObj>) => void
    deleteWalletItem: (type: 'assets' | 'activity', index: number) => void
}