import { useContext } from 'react';
import WalletsContext from '../../../context/WalletsContext'

import type { ActivityObj } from '../../../types/interfaces'

import ActivityItem from '../ActivityItem'

const Activity = () => {
	const walletsCtx = useContext(WalletsContext);
  const singleWallet = walletsCtx.singleWallet;

	return (
		<div>
			<p className="mb-3">Activity:</p>
			{singleWallet?.activity.map((singleActivity: ActivityObj) => (
				<ActivityItem key={singleWallet.id} singleActivity={singleActivity} />
			))}
		</div>
	)
}

export default Activity