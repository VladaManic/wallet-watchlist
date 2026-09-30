import { createContext, useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import { createDefaultWalletObjToAdd } from './defaults'

import type {WalletListItem, WalletObj, AssetsObj, WalletObjToAdd, WalletsCtxProps, ActivityObj} from '../types/interfaces'

const WalletsContext = createContext<WalletsCtxProps>({
	wallets: [],
	singleWallet: null,
	walletObjToAdd: createDefaultWalletObjToAdd(),
	setWallets: (wallets: WalletListItem[]) => {null},
	setSingleWallet: (wallet: WalletObj | null) => {},
	setWalletObjToAdd: (wallet: Partial<WalletObjToAdd>) => {},
	createAssets: () => {},
	updateAssets: () => {},
	createActivity: () => {},
	updateActivity: () => {},
	deleteWalletItem: () => {},
});

export const WalletsContextProvider = ({
    children,
}: PropsWithChildren<object>) => {
	const [currentWallets, setCurrentWallets] = useState<WalletListItem[]>([])
	const [currentSingleWallet, setCurrentSingleWallet] = useState<WalletObj | null>(null)
	const [currentWalletObjToAdd, setCurrentWalletObjToAdd] = useState<WalletObjToAdd>(createDefaultWalletObjToAdd());

	// useEffect(() => {
  //   console.log('Wallet changed:', currentWalletObjToAdd);
	// }, [currentWalletObjToAdd]);

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
            { id: 0, symbol: '', balance: 0,}
        ],
    }));
	};

	//Change values for symbol & balance in assets array
	const updateAssetsHandler = (index: number, data: Partial<AssetsObj>) => {
			setCurrentWalletObjToAdd(prev => ({
					...prev,
					assets: prev.assets.map((asset, i) => i === index ? { ...asset, ...data } : asset),
			}));
	};

	//Add empty object for activity
	const createActivityHandler = () => {
    setCurrentWalletObjToAdd(prev => ({
        ...prev,
        activity: [
            ...prev.activity,
            { id: 0, type: '', amount: '', date: ''}
        ],
    }));
	};

	//Change values for type & amount in activity array
	const updateActivityHandler = (index: number, data: Partial<ActivityObj>) => {
			setCurrentWalletObjToAdd(prev => ({
					...prev,
					activity: prev.activity.map((activity, i) => i === index ? { ...activity, ...data } : activity),
			}));
	};

	//Remove assets or activity row
	const deleteWalletItemHandler = (
    type: 'assets' | 'activity',
    index: number
	) => {
			setCurrentWalletObjToAdd(prev => ({
					...prev,
					[type]: prev[type].filter((_, i) => i !== index),
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
			updateAssets: updateAssetsHandler,
			createActivity: createActivityHandler,
			updateActivity: updateActivityHandler,
			deleteWalletItem: deleteWalletItemHandler,
  }

	return (
			<WalletsContext.Provider value={context}>
					{children}
			</WalletsContext.Provider>
	)
}

export default WalletsContext