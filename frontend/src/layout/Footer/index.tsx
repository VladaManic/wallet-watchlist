import { NavLink } from 'react-router-dom'

import walletIcon from '../../assets/img/bitcoin-wallet-white.svg'

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div className="flex justify-between items-center w-full h-[52px] pt-[60px] pb-[60px] bg-footer-bg text-color-body-bg">
			<NavLink to={`/`} end className="ml-[50px]">
				<div className="flex items-center">
					<img src={walletIcon} alt="Wallet icon" className="h-[60px]" />
					<p className="font-spartan-bold text-sm !text-body-bg">Wallet watchlist</p>
				</div>
			</NavLink>
			<div className="flex flex-col">
				<NavLink to={`/`} end className="mr-[20px] mb-[10px] ml-[20px] !text-body-bg">Home</NavLink>
				<NavLink to={`/add`} className="mr-[20px] ml-[20px] !text-body-bg">Add Wallet</NavLink>
			</div>
			<p className="mr-[52px] text-body-bg">Copyright &copy;{currentYear}</p>
		</div>
	)
}

export default Footer