import { $host } from './index.js';

export const getShops = async () => {
    const { data } = await $host.get('api/shops/');
    return data;
};
