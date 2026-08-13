import { createContext, useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';

import type {WalletListItem, WalletObj, AssetsObjToAdd, WalletObjToAdd, WalletsCtxProps} from '../types/interfaces'

const WalletsContext = createContext<WalletsCtxProps>({
	wallets: [],
	singleWallet: null,
	walletObjToAdd: {
		name: '',
		address: '',
		assets: [],
		//activity: [],
	},
	setWallets: (wallets: WalletListItem[]) => {null},
	setSingleWallet: (wallet: WalletObj | null) => {},
	setWalletObjToAdd: (wallet: Partial<WalletObjToAdd>) => {},
	createAssets: () => {},
	updateAssets: () => {},
});

export const WalletsContextProvider = ({
    children,
}: PropsWithChildren<object>) => {
	const [currentWallets, setCurrentWallets] = useState<WalletListItem[]>([])
	const [currentSingleWallet, setCurrentSingleWallet] = useState<WalletObj | null>(null)
	const [currentWalletObjToAdd, setCurrentWalletObjToAdd] = useState<WalletObjToAdd>({
    name: '',
    address: '',
    assets: [],
    //activity: [],
});

	useEffect(() => {
    console.log('Assets list changed:', currentWalletObjToAdd);
	}, [currentWalletObjToAdd]);

	//Set all wallets
	const setWalletsHandler = (wallets: WalletListItem[]) => {
			setCurrentWallets(wallets)
	}

	//Set single wallet
	const setSingleWalletHandler = (wallet: WalletObj | null) => {
    setCurrentSingleWallet(wallet);
	};

	//Set wallet object that is going to be sent to backend to add
	const setWalletObjToAddHandler = (data: Partial<WalletObjToAdd>) => {
			setCurrentWalletObjToAdd(prev => ({
					...prev,
					...data,
			}));
	};

	//Add empty object for assets
	const createAssetsHandler = () => {
    setCurrentWalletObjToAdd(prev => ({
        ...prev,
        assets: [
            ...prev.assets,
            { symbol: '', balance: 0,}
        ],
    }));
	};

	//Change valuse for symbol & balance in assets array
	const updateAssetsHandler = (index: number, data: Partial<AssetsObjToAdd>) => {
			setCurrentWalletObjToAdd(prev => ({
					...prev,
					assets: prev.assets.map((asset, i) => i === index ? { ...asset, ...data } : asset),
			}));
	};

	const context = {
			wallets: currentWallets,
			singleWallet: currentSingleWallet,
			walletObjToAdd: currentWalletObjToAdd,
			setWallets: setWalletsHandler,
			setSingleWallet: setSingleWalletHandler,
			setWalletObjToAdd: setWalletObjToAddHandler,
			createAssets: createAssetsHandler,
			updateAssets: updateAssetsHandler
  }

	return (
			<WalletsContext.Provider value={context}>
					{children}
			</WalletsContext.Provider>
	)
}

export default WalletsContext