import { createContext, useState } from 'react';
import type { PropsWithChildren } from 'react';

import type {WalletObj, WalletsCtxProps} from '../types/interfaces'

const WalletsContext = createContext<WalletsCtxProps>({
	wallets: [],
	setWallets: (wallets: WalletObj[]) => {null},
});

export const WalletsContextProvider = ({
    children,
}: PropsWithChildren<object>) => {
	const [currentWallets, setCurrentWallets] = useState<WalletObj[]>([])

	const setWalletsHandler = (wallets: WalletObj[]) => {
			setCurrentWallets(wallets)
	}

	const context = {
			wallets: currentWallets,
			setWallets: setWalletsHandler,
  }

	return (
			<WalletsContext.Provider value={context}>
					{children}
			</WalletsContext.Provider>
	)
}

export default WalletsContext