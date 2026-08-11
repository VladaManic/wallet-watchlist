import type { AssetsObj } from '../../../types/interfaces'

interface Props {
		singleAsset: AssetsObj;
}

const AssetItem = ({ singleAsset }: Props) => {
	return (
		<div className="flex">
			<p className="mr-10 ml-10">{singleAsset.symbol}</p>
			<p>{singleAsset.balance}</p>
		</div>
	)
}

export default AssetItem