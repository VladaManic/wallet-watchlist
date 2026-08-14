import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WalletsContext from "../../../context/WalletsContext";
import { createWallet } from '../../../api/requests';
import isPostObjectValid from '../../../utils/ifPostObjectValid'

import GeneralData from '../../Reusable/Form/GeneralData'
import AssetsData from '../../Reusable/Form/AssetsData'
import ActivityData from '../../Reusable/Form/ActivityData'


const AddForm = () => {
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
        const newWallet = await createWallet(walletsCtx.walletObjToAdd);
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
		<form>
			<GeneralData />
			<AssetsData />
			<ActivityData />
			<div className="mb-10 text-center">
				<p className={`mb-4 text-xl text-error transition-opacity duration-500 ${showValidationMessage ? 'opacity-100' : 'opacity-0'}`}>All the fields have to be filled with right data type</p>
				<button className="uppercase" onClick={onClickHandler}>Submit</button>
			</div>
		</form>
	)
}

export default AddForm