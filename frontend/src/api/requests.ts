import { api } from './axios';
import type { WalletObj } from '../types/interfaces';

export const getWalletsList = async (): Promise<WalletObj[]> => {
    try {
        const response = await api.get<WalletObj[]>('/api/wallets');
        return response.data;
    } catch (error) {
        console.error('Failed to fetch wallets:', error);
        throw error;
    }
};