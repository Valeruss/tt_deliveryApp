import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routes, RouteNames } from '../../router/index.js';

const AppRouter = () => {
    return (
        <Routes>
            {routes.map((route) =>
                <Route element={<route.element />} path={route.path} key={route.path} />
            )}
            <Route path='/*' element={<Navigate to={RouteNames.SHOPS} replace />} />
        </Routes>
    );
};

export default AppRouter;
