import { api } from './axios';
import type { WalletListItem, WalletObj } from '../types/interfaces';

export const getWalletsList = async (): Promise<WalletListItem[]> => {
    try {
        const response = await api.get<WalletListItem[]>('/api/wallets');
        return response.data;
    } catch (error) {
        console.error('Failed to fetch wallets:', error);
        throw error;
    }
};

export const getSingleWallet = async (id: number): Promise<WalletObj> => {
    try {
        const response = await api.get<WalletObj>(`/api/wallets/${id}`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch single wallet:', error);
        throw error;
    }
};