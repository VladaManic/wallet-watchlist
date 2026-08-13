import { useContext, useEffect } from 'react'
import WalletsContext from '../../context/WalletsContext'

const Page404 = () => {
	const walletsCtx = useContext(WalletsContext)

	useEffect(() => {
			walletsCtx.setSingleWallet(null);
			walletsCtx.setWalletObjToAdd({name: '', address: '', assets: [{ symbol: '', balance: 0,}], activity: [{ type: '', amount: '', date: ''}]})
	}, []);

	return (
		<div>Page404</div>
	)
}

export default Page404