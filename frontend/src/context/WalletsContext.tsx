import { createContext, useState } from 'react';
import type { PropsWithChildren } from 'react';

import type {WalletListItem, WalletObj, WalletsCtxProps} from '../types/interfaces'

const WalletsContext = createContext<WalletsCtxProps>({
	wallets: [],
	singleWallet: null,
	assetsList: [],
	setWallets: (wallets: WalletListItem[]) => {null},
	setSingleWallet: (wallet: WalletObj | null) => {},
	setAssetsList: () => {},
});

export const WalletsContextProvider = ({
    children,
}: PropsWithChildren<object>) => {
	const [currentWallets, setCurrentWallets] = useState<WalletListItem[]>([])
	const [currentSingleWallet, setCurrentSingleWallet] = useState<WalletObj | null>(null);
	const [currentAssetsList, setCurrentAssetsList] = useState<number[]>([])

	const setWalletsHandler = (wallets: WalletListItem[]) => {
			setCurrentWallets(wallets)
	}

	const setSingleWalletHandler = (wallet: WalletObj | null) => {
    setCurrentSingleWallet(wallet);
	};

	const setAssetsListHandler = () => {
		setCurrentAssetsList([...currentAssetsList, currentAssetsList.length])
	}

	const context = {
			wallets: currentWallets,
			singleWallet: currentSingleWallet,
			assetsList: currentAssetsList,
			setWallets: setWalletsHandler,
			setSingleWallet: setSingleWalletHandler,
			setAssetsList: setAssetsListHandler,
  }

	return (
			<WalletsContext.Provider value={context}>
					{children}
			</WalletsContext.Provider>
	)
}

export default WalletsContext