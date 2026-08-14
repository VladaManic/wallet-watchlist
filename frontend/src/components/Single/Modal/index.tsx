import GeneralData from '../../Reusable/Form/GeneralData'
import AssetsData from '../../Reusable/Form/AssetsData'
import ActivityData from '../../Reusable/Form/ActivityData'

const Modal = () => {
	return (
		<div className="w-[100%] max-h-[90vh] overflow-y-auto p-7">
			<h2>Edit wallet</h2>
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