import React, { useState, useEffect } from 'react';
import './style.css';
import api from '../../services/api';
import { Link } from 'react-router-dom';


import Carrosel from '../../Components/Carrosel';

interface User {
    name: string;
}

const Aplicaçao: React.FC = () => {

    const [user, setUser] = useState<User>();
    let [counter, setCounter] = useState();

    async function loadData() {
        /*  
        try {
            const response = await api.get('');
            setUser (response.data[0]);
        } catch (error) {
            
        }
        */
    }

    function startTimer(counter:number) {

        let intervalId = setInterval(() => {
            setCounter(counter--);
            console.log(counter)
            if(counter === -1) clearInterval(intervalId)
        }, 1000)
    }

    useEffect (
        () => {
            loadData();
        }, []
    );

    return (
        <div className='container' onClick={() => console.log(user)}>
            
            <div className='menu'>   {/* lado esquerdo */}
                <picture className='espaçamento-logo'>
                    <img src="../Imagens/POMODORC 1.png" alt="LOGO"/>
                        {/* imagem encontrada na pasta public */}
                </picture>

                <p>LISTA DE TAREFAS</p>
                <br></br>
                <p>AJUSTES</p>
                <br></br>

                <Link className='rotas' to="/">  
                    SAIR    {/* saida direcionada para o login */}
                </Link>

            </div>

            <div className='content'>   {/* lado direito */}
                <header className='header-content'>
                    Olá {user?.name}
                </header>

                <div className='content-app'>
                    <p>LISTA</p>
                    <br></br>
                    <Carrosel />
                    <br></br>

                    <button onClick={() => startTimer (counter)}>cdcasdca</button>
                    <p>{counter}</p>
                </div>
            </div>
        </div>
    );
}

export default Aplicaçao;