import { useContext, useEffect } from 'react'
import WalletsContext from '../../context/WalletsContext'
import { createDefaultWalletObjToAdd } from '../../context/defaults'

const Page404 = () => {
	const walletsCtx = useContext(WalletsContext)

	useEffect(() => {
			walletsCtx.setSingleWallet(null);
			walletsCtx.setWalletObjToAdd(createDefaultWalletObjToAdd())
	}, []);

	return (
		<div>Page404</div>
	)
}

export default Page404