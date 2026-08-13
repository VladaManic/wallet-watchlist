import { useContext } from "react";
import WalletsContext from "../../../../context/WalletsContext";

import AssetSingle from "../AssetSingle";

const AssetsData = () => {
	const walletsCtx = useContext(WalletsContext);

	const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		walletsCtx.createAssets()
  }

	return (
		<div className="mb-[30px]">
			<h2>Assets</h2>
			{walletsCtx.walletObjToAdd.assets.map((asset, index) => (
				<AssetSingle key={index} index={index} count={walletsCtx.walletObjToAdd.assets.length} />
			))}
			<button onClick={onClickHandler}>+ Add new assets</button>
		</div>
	)
}

export default AssetsData