import { createContext, useState } from 'react';
import type { PropsWithChildren } from 'react';

import type {WalletObj, WalletsCtxProps} from '../types/interfaces'

const WalletsContext = createContext<WalletsCtxProps>({
	wallets: [],
	singleWallet: null,
	setWallets: (wallets: WalletObj[]) => {null},
	setSingleWallet: (wallet: WalletObj | null) => {},
});

export const WalletsContextProvider = ({
    children,
}: PropsWithChildren<object>) => {
	const [currentWallets, setCurrentWallets] = useState<WalletObj[]>([])
	const [currentSingleWallet, setCurrentSingleWallet] = useState<WalletObj | null>(null);

	const setWalletsHandler = (wallets: WalletObj[]) => {
			setCurrentWallets(wallets)
	}

	const setSingleWalletHandler = (wallet: WalletObj | null) => {
    setCurrentSingleWallet(wallet);
};

	const context = {
			wallets: currentWallets,
			singleWallet: currentSingleWallet,
			setWallets: setWalletsHandler,
			setSingleWallet: setSingleWalletHandler,
  }

	return (
			<WalletsContext.Provider value={context}>
					{children}
			</WalletsContext.Provider>
	)
}

export default WalletsContext