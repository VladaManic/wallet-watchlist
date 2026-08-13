import { createContext, useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';

import type {WalletListItem, WalletObj, WalletObjToAdd, WalletsCtxProps} from '../types/interfaces'

const WalletsContext = createContext<WalletsCtxProps>({
	wallets: [],
	singleWallet: null,
	assetsList: [],
	walletObjToAdd: {},
	setWallets: (wallets: WalletListItem[]) => {null},
	setSingleWallet: (wallet: WalletObj | null) => {},
	setAssetsList: () => {},
	setWalletObjToAdd: (wallet: WalletObjToAdd) => {},
});

export const WalletsContextProvider = ({
    children,
}: PropsWithChildren<object>) => {
	const [currentWallets, setCurrentWallets] = useState<WalletListItem[]>([])
	const [currentSingleWallet, setCurrentSingleWallet] = useState<WalletObj | null>(null)
	const [currentAssetsList, setCurrentAssetsList] = useState<number[]>([])
	const [currentWalletObjToAdd, setCurrentWalletObjToAdd] = useState<WalletObj>({
    id: 0,
    name: '',
    address: '',
    created_at: '',
    assets: [],
    activity: [],
});

	useEffect(() => {
    console.log('Assets list changed:', currentWalletObjToAdd);
	}, [currentWalletObjToAdd]);

	const setWalletsHandler = (wallets: WalletListItem[]) => {
			setCurrentWallets(wallets)
	}

	const setSingleWalletHandler = (wallet: WalletObj | null) => {
    setCurrentSingleWallet(wallet);
	};

	const setAssetsListHandler = () => {
		setCurrentAssetsList([...currentAssetsList, currentAssetsList.length])
	}

	const setWalletObjToAddHandler = (data: WalletObjToAdd) => {
    setCurrentWalletObjToAdd(prev => ({
        ...prev,
        ...data,
    }));
	};

	const context = {
			wallets: currentWallets,
			singleWallet: currentSingleWallet,
			assetsList: currentAssetsList,
			walletObjToAdd: currentWalletObjToAdd,
			setWallets: setWalletsHandler,
			setSingleWallet: setSingleWalletHandler,
			setAssetsList: setAssetsListHandler,
			setWalletObjToAdd: setWalletObjToAddHandler,
  }

	return (
			<WalletsContext.Provider value={context}>
					{children}
			</WalletsContext.Provider>
	)
}

export default WalletsContext