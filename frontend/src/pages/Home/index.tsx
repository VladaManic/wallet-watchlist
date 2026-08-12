import { useContext, useEffect } from 'react'
import WalletsContext from '../../context/WalletsContext'
import type { WalletListItem } from '../../types/interfaces'

import WalletCard from '../../components/Home/WalletCard'

const Home = () => {
	const walletsCtx = useContext(WalletsContext)
	
	useEffect(() => {
			walletsCtx.setSingleWallet(null);
	}, []);

	return (
		<div>
			<h1>Wallets list</h1>
			{walletsCtx.wallets.map((singleWallet: WalletListItem) => (
				<WalletCard key={singleWallet.id} wallet={singleWallet} />
			))}
		</div>
	)
}

export default Home