import { useContext } from 'react';
import WalletsContext from '../../../context/WalletsContext'

import type { AssetsObj } from '../../../types/interfaces'

import AssetItem from '../AssetItem'

const Assets = () => {
	const walletsCtx = useContext(WalletsContext);
  const singleWallet = walletsCtx.singleWallet;

	return (
		<div className="mb-3">
			<p className="mb-3">Assets:</p>
			{singleWallet?.assets.map((singleAsset: AssetsObj) => (
				<AssetItem key={singleAsset.id} singleAsset={singleAsset} />
			))}
		</div>
	)
}

export default Assets