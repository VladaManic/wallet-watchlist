import { useContext } from 'react';
import WalletsContext from '../../../context/WalletsContext'

const General = () => {
    const walletsCtx = useContext(WalletsContext);
    const singleWallet = walletsCtx.singleWallet;
		const createdAt =  singleWallet && new Date(singleWallet!.created_at)

    if (!singleWallet) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <p className="mb-3">ID: {singleWallet.id}</p>
						<p className="mb-3">Name: {singleWallet.name}</p>
						<p className="mb-3">Address: {singleWallet.address}</p>
            <p className="mb-3">Created at: {createdAt!.toLocaleDateString()}</p>
        </div>
    );
};

export default General