import { useContext, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { getSingleWallet } from '../../api/requests'
import WalletsContext from '../../context/WalletsContext'

import General from "../../components/Single/General";
import Assets from "../../components/Single/Assests";
import Activities from "../../components/Single/Activities";

const Single = () => {
	const { walletId } = useParams()  //Getting param from URL
	const walletsCtx = useContext(WalletsContext);

	useEffect(() => {
		if (!walletId) return;
    const id = Number(walletId);
		getSingleWallet(id).then((data) => {
				walletsCtx.setSingleWallet(data);
				//console.log(data);
		});
	}, []);

	return (
		<div className="pt-12">
			<General />
			<Assets />
			<Activities />
		</div>
	)
}

export default Single