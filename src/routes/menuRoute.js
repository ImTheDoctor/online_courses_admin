import React from 'react'
import { Routes, Route } from "react-router-dom";
import routes from './routes';

const menuRoutes = () => {
    return (
        <Routes>
            {
                routes.map((route, index) => (
                    <Route key={index} path={route.path} exact={route.exact} element={<route.element />} />
                ))
            }
        </Routes>
    )
}

export default menuRoutes