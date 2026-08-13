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
            <p className="mb-3"><span className="font-spartan-bold">ID:</span> {singleWallet.id}</p>
            <p className="mb-3"><span className="font-spartan-bold">Name:</span> {singleWallet.name}</p>
            <p className="mb-3"><span className="font-spartan-bold">Address:</span> {singleWallet.address}</p>
            <p className="mb-3"><span className="font-spartan-bold">Created at:</span> {createdAt!.toLocaleDateString()}</p>
        </div>
    );
};

export default General