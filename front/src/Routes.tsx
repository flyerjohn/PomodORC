import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Aplicaçao from './Pages/Aplicaçao/Index';
import Login from './Pages/Login/Index';
import Cadastro from './Pages/Cadastro/Index';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Login} path="/" exact/>
            <Route component={Cadastro} path="/Cadastro" exact/>
            <Route component={Aplicaçao} path="/app" exact />
        </BrowserRouter>
    );
}

export default Routes;