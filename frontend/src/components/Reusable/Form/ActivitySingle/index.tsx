import { useContext } from "react"
import WalletsContext from "../../../../context/WalletsContext"

import type { ActivityObjToAdd } from "../../../../types/interfaces"

interface ActivitySingleProps {
	activity: ActivityObjToAdd
	index: number 
	count: number
}

const ActivitySingle = ({index, activity, count}: ActivitySingleProps) => {
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

	const onDeleteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		walletsCtx.deleteWalletItem('activity', index)
	}

	return (
		<div className="flex justify-between items-center mb-7">
			<div className="flex justify-between items-center w-[85%]">
				<div className="w-[30%]">
					<label htmlFor={`activity-type-${index}`}>Type</label>
					<input type="text" id={`activity-type-${index}`} className="form-field" defaultValue={walletsCtx.walletObjToAdd.type === false ? activity.type : ''} onChange={(e) => setTypeHandler(e.target.value)} />
				</div>
				<div className="w-[30%]">
					<label htmlFor={`activity-amount-${index}`}>Amount</label>
					<input type="text" id={`activity-amount-${index}`} className="form-field" defaultValue={walletsCtx.walletObjToAdd.type === false ? activity.amount : ''} onChange={(e) => setAmountHandler(e.target.value)} />
				</div>
				<div className="w-[30%]">
					<label htmlFor={`activity-date-${index}`}>Date</label>
					<input type="text" id={`activity-date-${index}`} className="form-field" defaultValue={walletsCtx.walletObjToAdd.type === false ? activity.date : ''} onChange={(e) => setDateHandler(e.target.value)} />
				</div>
			</div>
			{ count -1 == index && <button className="mt-4" onClick={onDeleteHandler}>Delete</button> }
		</div>
	)
}

export default ActivitySingle