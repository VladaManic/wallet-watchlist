import axios from 'axios'

export const getWalletsList = async () => {
	try {
			const response = await axios.get(
					`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=8`
			)
			console.log(response.data);
	} catch (error) {
			console.error('Failed to fetch wallets:', error)
			throw error
	}
}