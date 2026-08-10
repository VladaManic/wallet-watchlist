import { useEffect } from "react";
import { useParams } from 'react-router-dom'
import { getSingleWallet } from '../../api/requests'

const Single = () => {
	const { walletId } = useParams()  //Getting param from URL

	useEffect(() => {
		if (!walletId) return;
    const id = Number(walletId);
		getSingleWallet(id).then((data) => {
				//walletsCtx.setWallets(data);
				console.log(data);
		});
	}, []);

	return (
		<div>Single</div>
	)
}

export default Single