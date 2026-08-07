import { api } from './axios';

export const getWalletsList = async () => {
    try {
        const response = await api.get('/api/wallets');
        //console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch wallets:', error);
        throw error;
    }
};