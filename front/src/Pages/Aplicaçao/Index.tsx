import React, { useState, useEffect } from 'react';
import './style.css';
import api from '../../services/api';
import { Link } from 'react-router-dom';


import Carrosel from '../../Components/Carrosel';

interface User {
    name: string;
}

const Aplicaçao: React.FC = () => {


    const [category, setCategory] = useState([]);

    async function loadData() {
        /*  
        try {
            const response = await api.get('');
            setUser (response.data[0]);
        } catch (error) {
            
        }
        */
    }

    

    useEffect(
        () => {
            loadData();
        }, []
    );
    const [info, setInfo] = useState('');

    const createTask = async (_id: string) => {
        try {
            await api.post(`task/${_id}`, {
                name: info
            });
            window.location.reload();
        } catch (error) {
            console.log(error.message);
        }
    }
    const getCategory = async () => {
        try {
            const _category = await api.get('categories');
            setCategory(_category.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getCategory();
    }, []);


    return (
        <div className='container'>

            <div className='menu'>   {/* lado esquerdo */}
                <picture className='espaçamento-logo'>
                    <img src="../Imagens/POMODORC 1.png" alt="LOGO" />
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
                    Olá Pessoa
                </header>

                <div className='content-app'>
                   
                    
                    {
            category?.map(({_id,name,tasks})=>{
                return (
                    <> 
                    <h1> {name} </h1> 
                    <input onChange={e => { setInfo(e.target.value) }} />
                    <button onClick={() => {createTask(_id) }} > ahhh</button>
                    <Carrosel taskList={tasks} />
                    </>
                );
            }) 
            }
                
                    


                    
                    <br/>

                   
                </div>

                <div>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                   

                    
                </div>
            </div>
        </div>
    );
}

export default Aplicaçao;