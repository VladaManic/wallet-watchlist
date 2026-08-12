import { useContext } from "react";
import WalletsContext from "../../../../context/WalletsContext";

import AssetSingle from "../AssetSingle";

const AssetsData = () => {
	const walletsCtx = useContext(WalletsContext);

	const onClickHandler = () => {
    walletsCtx.setAssetsList()
  }

	return (
		<div className="mb-[30px]">
			<h2>Assets</h2>
			{walletsCtx.assetsList.map((item: number) => (
				<AssetSingle key={item} />
			))}
			<button onClick={onClickHandler}>+ Add new asset</button>
		</div>
	)
}

export default AssetsData