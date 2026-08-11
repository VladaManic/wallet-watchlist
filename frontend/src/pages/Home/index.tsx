import { useContext, useEffect } from 'react'
import WalletsContext from '../../context/WalletsContext'
import type { WalletObj } from '../../types/interfaces'

import WalletCard from '../../components/Home/WalletCard'

const Home = () => {
	const walletsCtx = useContext(WalletsContext)
	
	useEffect(() => {
			walletsCtx.setSingleWallet(null);
	}, []);

	return (
		<div className="pt-[50px]">
			{walletsCtx.wallets.map((singleWallet: WalletObj) => (
				<WalletCard key={singleWallet.id} wallet={singleWallet} />
			))}
		</div>
	)
}

export default Home