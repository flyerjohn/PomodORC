import React from 'react';
import {Link} from'react-router-dom';

const Cadastro = () => {
    return (
        <div>
            Cadastro
            <br></br>
            <Link to="/">
                ir para o login
            </Link>
            <br></br>
            <Link to="/app">
                Entrar
            </Link>
        </div>
    );
}

export default Cadastro;