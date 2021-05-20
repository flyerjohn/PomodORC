import React from 'react';
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div>
            Login
            <br></br>
            <Link to="/Cadastro">
                ir para o cadastro
            </Link>
            <br></br>
            <Link to="/app">
                Entrar
            </Link>
        </div>
    );
}

export default Login;