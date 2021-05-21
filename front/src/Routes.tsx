import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Aplicaçao from './Pages/Aplicaçao/Index';


const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Aplicaçao} path="/" exact />
        </BrowserRouter>
    );
}

export default Routes;