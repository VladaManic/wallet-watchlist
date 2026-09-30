import { useContext, useEffect } from 'react'
import WalletsContext from '../../context/WalletsContext'

const Page404 = () => {
	const walletsCtx = useContext(WalletsContext)

	useEffect(() => {
			walletsCtx.setSingleWallet(null);
			walletsCtx.setWalletObjToAdd({id: 0, name: '', address: '', assets: [{ id: 0, symbol: '', balance: 0,}], activity: [{ id: 0, type: '', amount: '', date: ''}], type: true})
	}, []);

	return (
		<div>Page404</div>
	)
}

export default Page404