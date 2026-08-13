import { useContext, useState } from 'react';
import WalletsContext from "../../../context/WalletsContext";
import { createWallet } from '../../../api/requests';
import isPostObjectValid from '../../../utils/ifPostObjectValid'

import GeneralData from '../../Reusable/Form/GeneralData'
import AssetsData from '../../Reusable/Form/AssetsData'
import ActivityData from '../../Reusable/Form/ActivityData'


const AddForm = () => {
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

			await createWallet(walletsCtx.walletObjToAdd);
	};

	return (
		<form>
			<GeneralData />
			<AssetsData />
			<ActivityData />
			<div className="mb-10 text-center">
				<button className="mb-4 uppercase" onClick={onClickHandler}>Submit</button>
				{showValidationMessage && (<p className="text-xl text-error">All the fields have to be filled</p>)}
			</div>
		</form>
	)
}

export default AddForm