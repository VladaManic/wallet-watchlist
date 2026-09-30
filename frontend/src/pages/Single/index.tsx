import { useContext, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { getSingleWallet } from '../../api/requests'
import WalletsContext from '../../context/WalletsContext'

import Hero from "../../components/Single/Hero"
import General from "../../components/Single/General"
import Assets from "../../components/Single/Assests"
import Activities from "../../components/Single/Activities"

import type { WalletObjToAdd } from "../../types/interfaces"

const Single = () => {
	const { walletId } = useParams()  //Getting param from URL
	const id = Number(walletId)
	const walletsCtx = useContext(WalletsContext)

	useEffect(() => {
		if (!walletId) return
		getSingleWallet(id).then((data) => {
				walletsCtx.setSingleWallet(data)
				//console.log(data);
				const { created_at, ...editableWallet } = data
        const walletToEdit: WalletObjToAdd = {
            ...editableWallet,
            type: false
        }
        walletsCtx.setWalletObjToAdd(walletToEdit)
		})
	}, [])

	return (
		<div>
			<Hero id={id} />
			<General />
			<Assets />
			<Activities />
		</div>
	)
}

export default Single