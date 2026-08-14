import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import WalletsContext from "../../../context/WalletsContext"
import { deleteWallet } from '../../../api/requests'

import ModalDefaultWrap from '../../Reusable/ModalDefaultWrap'
import Modal from '../Modal'

const Hero = ({ id }: { id: number }) => {
	const navigate = useNavigate()
	const walletsCtx = useContext(WalletsContext)
	const [modalVisible, setModalVisible] = useState(false) 

	const onUpdateHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		setModalVisible(true)
	}

	const onDeleteHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
		try {
			
			await deleteWallet(id);
			//remove from context
			walletsCtx.setWallets(
					walletsCtx.wallets.filter(
							(wallet) => Number(wallet.id) !== id
					)
			);
			//redirect
			navigate('/');
		} catch (error) {
				console.error('Request failed:', error)
		}
	}

	const onCloseHandler = () => {
		setModalVisible(false)
	}

	return (
		<div className="flex justify-between">
			<h1>Wallet</h1>
			<div>
				<button className="mr-5" onClick={onUpdateHandler}>Edit</button>
				<button onClick={onDeleteHandler}>Delete</button>
			</div>
			{modalVisible && (
					<ModalDefaultWrap onClose={onCloseHandler}>
						<Modal onClickClose={onCloseHandler} />
					</ModalDefaultWrap>
			)}
		</div>
	)
}

export default Hero
