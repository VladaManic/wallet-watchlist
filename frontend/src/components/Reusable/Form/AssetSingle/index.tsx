import { useContext } from "react"
import WalletsContext from "../../../../context/WalletsContext"

const AssetSingle = ({ index }: { index: number }) => {
	const walletsCtx = useContext(WalletsContext);

	const setSymbolHandler = (value: string) => {
		walletsCtx.updateAssets(index, {symbol: value,})
	}

	const setBalanceHandler = (value: number) => {
		walletsCtx.updateAssets(index, {balance: value,})
	}

	return (
		<div className="flex justify-between items-center mb-7">
			<div className="w-[40%]">
				<label htmlFor={`asset-symbol-${index}`}>Symbol</label>
				<input type="text" id={`asset-symbol-${index}`} className="form-field" onChange={(e) => setSymbolHandler(e.target.value)} />
			</div>
			<div className="w-[40%]">
				<label htmlFor={`asset-symbol-${index}`}>Balance</label>
				<input type="text" id={`asset-symbol-${index}`} className="form-field" onChange={(e) => setBalanceHandler(parseFloat(e.target.value))} />
			</div>
			<button className="mt-4">Delete</button>
		</div>
	)
}

export default AssetSingle