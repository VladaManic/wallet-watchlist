import { createContext, useState } from 'react';
import type { PropsWithChildren } from 'react';

import type {WalletListItem, WalletObj, WalletsCtxProps} from '../types/interfaces'

const WalletsContext = createContext<WalletsCtxProps>({
	wallets: [],
	singleWallet: null,
	setWallets: (wallets: WalletListItem[]) => {null},
	setSingleWallet: (wallet: WalletObj | null) => {},
});

export const WalletsContextProvider = ({
    children,
}: PropsWithChildren<object>) => {
	const [currentWallets, setCurrentWallets] = useState<WalletListItem[]>([])
	const [currentSingleWallet, setCurrentSingleWallet] = useState<WalletObj | null>(null);

	const setWalletsHandler = (wallets: WalletListItem[]) => {
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