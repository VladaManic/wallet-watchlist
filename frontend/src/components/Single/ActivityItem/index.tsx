import type { ActivityObj } from '../../../types/interfaces'

interface Props {
		singleActivity: ActivityObj;
}

const ActivityItem = ({ singleActivity }: Props) => {
	const createdAt =  new Date(singleActivity.date)

	return (
		<div className="flex">
			<p className="mr-10 ml-10">{singleActivity.type}</p>
			<p className="mr-10 ml-10">{singleActivity.amount}</p>
			<p>{createdAt!.toLocaleDateString()}</p>
		</div>
	)
}

export default ActivityItem