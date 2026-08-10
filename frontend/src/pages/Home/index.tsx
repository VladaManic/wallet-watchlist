import { useContext } from 'react'
import WalletsContext from '../../context/WalletsContext'
import type { WalletObj } from '../../types/interfaces'

import WalletCard from '../../components/WalletCard'

const Home = () => {
	const walletsCtx = useContext(WalletsContext)

	return (
		<div className="pt-[50px]">
			{walletsCtx.wallets.map((singleWallet: WalletObj) => (
				<WalletCard key={singleWallet.id} wallet={singleWallet} />
			))}
		</div>
	)
}

export default Home