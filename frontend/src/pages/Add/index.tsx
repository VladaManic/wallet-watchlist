import { useContext, useEffect } from "react";
import WalletsContext from "../../context/WalletsContext";
import { createDefaultWalletObjToAdd } from "../../context/defaults";

import AddForm from "../../components/Add/AddForm"

const Add = () => {
	const walletsCtx = useContext(WalletsContext);

	useEffect(() => {
		walletsCtx.setWalletObjToAdd(createDefaultWalletObjToAdd())
	}, []);

	return (
		<div>
			<h1>Add new wallet</h1>
			<AddForm />
		</div>
	)
}

export default Add