import { useContext, useEffect } from 'react'
import WalletsContext from '../../context/WalletsContext'
import type { WalletListItem } from '../../types/interfaces'

import WalletCard from '../../components/Home/WalletCard'

const Home = () => {
	const walletsCtx = useContext(WalletsContext)
	
	useEffect(() => {
			walletsCtx.setSingleWallet(null);
			walletsCtx.setWalletObjToAdd({id: 0, name: '', address: '', assets: [{ id: 0, symbol: '', balance: 0,}], activity: [{ id: 0, type: '', amount: '', date: ''}], type: true})
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