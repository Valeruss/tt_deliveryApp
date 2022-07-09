import React from 'react';
import HisoryPage from '../pages/HistoryPage/HistoryPage';
import ShoppingCardPage from '../pages/ShoppingCardPage/ShoppingCardPage';
import ShopsPage from '../pages/ShopsPage/ShopsPage';

export const RouteNames = {
    SHOPS: '/',
    CARD: '/card',
    HISTORY: '/history'
};

export const routes = [
    { path: RouteNames.SHOPS, element: ShopsPage },
    { path: RouteNames.CARD, element: ShoppingCardPage },
    { path: RouteNames.HISTORY, element: HisoryPage }
];
