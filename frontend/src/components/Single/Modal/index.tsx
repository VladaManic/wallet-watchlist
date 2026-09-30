import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import WalletsContext from "../../../context/WalletsContext";
import { editWallet } from '../../../api/requests';

import GeneralData from '../../Reusable/Form/GeneralData'
import AssetsData from '../../Reusable/Form/AssetsData'
import ActivityData from '../../Reusable/Form/ActivityData'
import isPostObjectValid from '../../../utils/ifPostObjectValid'

import removeIcon from '../../../assets/img/remove-icon.svg'

interface Props {
    onClickClose: React.MouseEventHandler<HTMLImageElement>
}

const Modal = ({ onClickClose }: Props) => {
	const navigate = useNavigate();
	const walletsCtx = useContext(WalletsContext);
	const [showValidationMessage, setShowValidationMessage] = useState(false);

	const onClickHandler = async (e: React.FormEvent) => {
			e.preventDefault();

			if (!isPostObjectValid(walletsCtx)) {
					setShowValidationMessage(true);
					setTimeout(() => {
							setShowValidationMessage(false);
					}, 3000);
					return;
			}

			try {
        const newWallet = await editWallet(walletsCtx.walletObjToAdd);
        walletsCtx.setWallets([
            newWallet,
            ...walletsCtx.wallets
        ]);
        // redirect
				navigate('/');
			} catch (error) {
					console.error('Request failed:', error);
			}
	};


	return (
		<div className="w-[100%] max-h-[90vh] overflow-y-auto p-7">
			<div className="flex justify-between items-center mb-5">
				<h2 className="!mb-0">Edit wallet</h2>
				<img src={removeIcon} alt="Remove icon" className="w-[50px] cursor-pointer hover:opacity-50 transition-opacity duration-300" onClick={onClickClose} />
			</div>
			<form>
				<GeneralData />
				<AssetsData />
				<ActivityData />
				<div className="mb-10 text-center">
					<p className={`mb-4 text-xl text-error transition-opacity duration-500 ${showValidationMessage ? 'opacity-100' : 'opacity-0'}`}>All the fields have to be filled with right data type</p>
					<button className="uppercase" onClick={onClickHandler}>Submit</button>
				</div>
			</form>
		</div>
	)
}

export default Modal