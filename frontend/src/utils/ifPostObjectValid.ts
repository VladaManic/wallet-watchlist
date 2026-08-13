import type { WalletObjToAdd } from "../types/interfaces";

function isPostObjectValid(walletsCtx: { walletObjToAdd: WalletObjToAdd }) {
    const wallet = walletsCtx.walletObjToAdd;

    if (!wallet.name?.trim() || !wallet.address?.trim()) {
        return false;
    }

    const assetsValid = wallet.assets.every(
        asset =>
            asset.symbol.trim() !== '' &&
            asset.balance > 0
    );

    const activityValid = wallet.activity.every(
        activity =>
            activity.type.trim() !== '' &&
            activity.amount.trim() !== '' &&
            activity.date.trim() !== ''
    );

    return assetsValid && activityValid;
}

export default isPostObjectValid;