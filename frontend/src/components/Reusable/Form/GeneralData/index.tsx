import { useContext } from "react";
import WalletsContext from "../../../../context/WalletsContext";

const GeneralData = () => {
	const walletsCtx = useContext(WalletsContext);

	const setNameHandler = (value: string) => {
		walletsCtx.setWalletObjToAdd({name: value})
	}

	const setAddressHandler = (value: string) => {
		walletsCtx.setWalletObjToAdd({address: value})
	}

	return (
		<div className="flex justify-between mb-7">
			<div className="w-[48%]">
				<label htmlFor="wallet-name">Name</label>
				<input type="text" id="wallet-name" className="form-field" value={walletsCtx.walletObjToAdd.name ?? ''} onChange={(e) => setNameHandler(e.target.value)}
				/>
			</div>
			<div className="w-[48%]">
				<label htmlFor="wallet-address">Address</label>
				<input type="text" id="wallet-address" className="form-field" value={walletsCtx.walletObjToAdd.address ?? ''} readOnly={walletsCtx.walletObjToAdd.type === false} onChange={(e) => setAddressHandler(e.target.value)}
				/>
			</div>
		</div>
	)
}

export default GeneralData