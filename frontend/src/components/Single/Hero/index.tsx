import { useNavigate } from 'react-router-dom';
import { deleteWallet } from '../../../api/requests';

const Hero = ({ id }: { id: number }) => {
	const navigate = useNavigate();

	const onUpdateHandler = (e: React.MouseEvent<HTMLButtonElement>) => {

	}

	const onDeleteHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
		try {
			await deleteWallet(id);
			// redirect
			navigate('/');
		} catch (error) {
				console.error('Request failed:', error);
		}
	}

	return (
		<div className="flex justify-between">
			<h1>Wallet</h1>
			<div>
				<button className="mr-5" onClick={onUpdateHandler}>Update</button>
				<button onClick={onDeleteHandler}>Delete</button>
			</div>
		</div>
	)
}

export default Hero
