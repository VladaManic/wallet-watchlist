import { NavLink } from 'react-router-dom'

import arrowRight from '../../../assets/img/arrow-right.svg'

import type { WalletObj } from '../../../types/interfaces'

interface Props {
    wallet: WalletObj;
}

const WalletCard = ({ wallet }: Props) => {
    const param = wallet !== undefined && wallet.id
	const createdAt = new Date(wallet.created_at);

    return (
        <NavLink
            to={`/wallet/${param}`}>
            <div className="flex justify-between items-center mb-7 py-[15px] px-[24px] border-2 border-solid border-border-orange rounded-[10px] bg-single-card">
                <div>{wallet.id}</div>
                <div>{wallet.name}</div>
                <div>{wallet.address}</div>
                <div>{createdAt.toLocaleDateString()}</div>
                <div><img src={arrowRight} alt="Arrow right" className="w-[10px]" /></div>
            </div>
        </NavLink>
    );
};

export default WalletCard