import type { WalletObj } from '../../types/interfaces'

interface Props {
    wallet: WalletObj;
}

const WalletCard = ({ wallet }: Props) => {
		const createdAt = new Date(wallet.created_at);

    return (
        <div className="flex justify-between">
            <div>{wallet.id}</div>
            <div>{wallet.name}</div>
						<div>{wallet.address}</div>
						<div>{createdAt.toLocaleDateString()}</div>
        </div>
    );
};

export default WalletCard