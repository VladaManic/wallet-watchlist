import { useContext } from "react"
import WalletsContext from "../../../../context/WalletsContext"

interface AssetSingleProps { 
	index: number 
	count: number
}

const AssetSingle = ({index, count}: AssetSingleProps) => {
	const walletsCtx = useContext(WalletsContext);

	const setSymbolHandler = (value: string) => {
		walletsCtx.updateAssets(index, {symbol: value,})
	}

	const setBalanceHandler = (value: number) => {
		walletsCtx.updateAssets(index, {balance: value,})
	}

	const onDeleteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		walletsCtx.deleteWalletItem('assets', index)
	}

	return (
		<div className="flex justify-between items-center mb-7">
			<div className="flex justify-between items-center w-[85%]">
				<div className="w-[48%]">
					<label htmlFor={`asset-symbol-${index}`}>Symbol</label>
					<input type="text" id={`asset-symbol-${index}`} className="form-field" onChange={(e) => setSymbolHandler(e.target.value)} />
				</div>
				<div className="w-[48%]">
					<label htmlFor={`asset-balance-${index}`}>Balance</label>
					<input type="text" id={`asset-balance-${index}`} className="form-field" onChange={(e) => setBalanceHandler(parseFloat(e.target.value))} />
				</div>
			</div>
			{ count -1 == index && <button className="mt-4" onClick={onDeleteHandler}>Delete</button> }
		</div>
	)
}

export default AssetSingle