import { useContext } from 'react';
import WalletsContext from "../../../context/WalletsContext";
import { createWallet } from '../../../api/requests';

import GeneralData from '../../Reusable/Form/GeneralData'
import AssetsData from '../../Reusable/Form/AssetsData'
import ActivityData from '../../Reusable/Form/ActivityData'

const AddForm = () => {
	const walletsCtx = useContext(WalletsContext);

	const onClickHandler = async (e: React.FormEvent) => {
		e.preventDefault();
    await createWallet(walletsCtx.walletObjToAdd);
	}

	return (
		<form>
			<GeneralData />
			<AssetsData />
			<ActivityData />
			<button className="mb-10 uppercase" onClick={onClickHandler}>Submit</button>
		</form>
	)
}

export default AddForm