import { useContext } from "react";
import WalletsContext from "../../../../context/WalletsContext";

import ActivitySingle from "../ActivitySingle";

const ActivityData = () => {
	const walletsCtx = useContext(WalletsContext);

	const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		walletsCtx.createActivity()
  }

	return (
		<div className="mb-[30px]">
			<h2>ActivityData</h2>
			{walletsCtx.walletObjToAdd.activity.map((activity, index) => (
				<ActivitySingle key={index} index={index} count={walletsCtx.walletObjToAdd.activity.length} />
			))}
			<button onClick={onClickHandler}>+ Add new asset</button>
		</div>
	)
}

export default ActivityData