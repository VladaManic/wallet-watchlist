import type { WalletObjToAdd } from "../types/interfaces"

export const createDefaultWalletObjToAdd = (): WalletObjToAdd => ({
	id: 0,
	name: '',
	address: '',
	assets: [{ id: 0, symbol: '', balance: '' }],
	activity: [{ id: 0, type: '', amount: '', date: '' }],
	type: true
})