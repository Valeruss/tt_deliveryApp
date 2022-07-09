import { $host } from './index.js';

export const getProductsByShopName = async (shopName) => {
    const { data } = await $host.get('api/products/' + shopName);
    return data;
}
