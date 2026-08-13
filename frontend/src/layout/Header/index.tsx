import { NavLink } from 'react-router-dom'

import walletIcon from '../../assets/img/bitcoin-wallet.svg'

const Header = () => {
	return (
		<div className="flex justify-between items-center w-full h-[52px] pt-[40px] pb-[40px] bg-header-bg">
			<NavLink to={`/`} end className="ml-[50px]">
				<div className="flex items-center">
					<img src={walletIcon} alt="Wallet icon" className="h-[60px]" />
					<p className="font-spartan text-sm">Wallet watchlist</p>
				</div>
			</NavLink>
			<div>
				<NavLink to={`/`} end className="mr-[20px] ml-[20px]">Home</NavLink>
				<NavLink to={`/add`} className="mr-[20px] ml-[20px]">Add Wallet</NavLink>
			</div>
			<div></div>
		</div>
	)
}

export default Header