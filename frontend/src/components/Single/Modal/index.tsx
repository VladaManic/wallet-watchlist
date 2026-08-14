import GeneralData from '../../Reusable/Form/GeneralData'
import AssetsData from '../../Reusable/Form/AssetsData'
import ActivityData from '../../Reusable/Form/ActivityData'

import removeIcon from '../../../assets/img/remove-icon.svg'

interface Props {
    onClickClose: React.MouseEventHandler<HTMLImageElement>
}

const Modal = ({ onClickClose }: Props) => {
	return (
		<div className="w-[100%] max-h-[90vh] overflow-y-auto p-7">
			<div className="flex justify-between items-center mb-5">
				<h2 className="!mb-0">Edit wallet</h2>
				<img src={removeIcon} alt="Remove icon" className="w-[50px] cursor-pointer hover:opacity-50 transition-opacity duration-300" onClick={onClickClose} />
			</div>
			<form>
				<GeneralData />
				<AssetsData />
				<ActivityData />
				<div>
					<button>Submit</button>
				</div>
			</form>
		</div>
	)
}

export default Modal