import { useContext } from "react"
import WalletsContext from "../../../../context/WalletsContext"

const ActivitySingle = ({ index }: { index: number }) => {
	const walletsCtx = useContext(WalletsContext);

	const setTypeHandler = (value: string) => {
		walletsCtx.updateActivity(index, {type: value,})
	}

	const setAmountHandler = (value: string) => {
		walletsCtx.updateActivity(index, {amount: value,})
	}

	const setDateHandler = (value: string) => {
		walletsCtx.updateActivity(index, {date: value,})
	}

	return (
		<div className="flex justify-between items-center mb-7">
			<div className="w-[25%]">
				<label htmlFor={`asset-symbol-${index}`}>Type</label>
				<input type="text" id={`asset-symbol-${index}`} className="form-field" onChange={(e) => setTypeHandler(e.target.value)} />
			</div>
			<div className="w-[25%]">
				<label htmlFor={`asset-symbol-${index}`}>Amount</label>
				<input type="text" id={`asset-symbol-${index}`} className="form-field" onChange={(e) => setAmountHandler(e.target.value)} />
			</div>
			<div className="w-[25%]">
				<label htmlFor={`asset-symbol-${index}`}>Date</label>
				<input type="text" id={`asset-symbol-${index}`} className="form-field" onChange={(e) => setDateHandler(e.target.value)} />
			</div>
			<button className="mt-4">Delete</button>
		</div>
	)
}

export default ActivitySingle