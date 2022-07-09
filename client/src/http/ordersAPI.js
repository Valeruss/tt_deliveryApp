import { $host } from './index.js';

export const getByEmailAndPhone = async (params) => {
    const { data } = await $host.post('api/orders/get', params);
    return data;
}

export const createOrder = async (order) => {
    const { data } = await $host.post('api/orders/create', order);
    return data;
}
