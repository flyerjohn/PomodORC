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

    async function loadData() {
        /*  
        try {
            const response = await api.get('');
            setUser (response.data[0]);
        } catch (error) {
            
        }
        */
    }

    useEffect (
        () => {
            loadData();
        }, []
    );
    const [info, setInfo] = useState('');

    const createTask = async () =>{
        try {
            await api.post('task',{
                name: info
            });           
            window.location.reload();
        } catch (error) {
            console.log(error.message);
        }
    }
    

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
                </div>
           
            <div>
            <input onChange = { e => {setInfo(e.target.value)} }/>
            
            <button onClick= {()=>{createTask()}} >
            GO
            </button>
            </div>
            </div>
        </div>
    );
}

export default Aplicaçao;