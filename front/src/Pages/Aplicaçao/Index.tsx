import React, { useState, useEffect, BaseSyntheticEvent } from 'react';
import './style.css';
import api from '../../services/api';
import Carrosel from '../../Components/Carrosel';
import { RiCloseLine } from "react-icons/ri";
import Lista from '../../Components/Lista';



const Aplicaçao: React.FC = () => {


    const [category, setCategory] = useState([]);
    const [taskModal, setTaskModal] = useState(false);
    const [categoryModal, setCategoryModal] = useState(false);
    const [editCategoryModal, setEditCategoryModal] = useState(false);
    const [categoryValue, setCategoryValue] = useState<string>('');
    const [taskName, setTaskName] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [categoryId, setCategoryId] = useState('');


    function onChangeSelect(value:string){
        setCategoryValue(value);
    }
    function onChangeCategoryId(value:string){
     setCategoryId(value);
    }

    const createTask = async (_id: string) => {
        try {
            await api.post(`task/${_id}`, {
                name: taskName
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

    const createCategory = async (name:string) => {
        try {
            await api.post("/category", {
                name:name
            });
            window.location.reload();
        } catch (error) {
            console.log(error.message);
        }
    }
    const updateCategory = async (name:string, _id: string) => {
        try {
            await api.put(`/categories/${_id}`, {
                name:name
            });
            window.location.reload();
        } catch (error) {
            console.log(error.message);
        }
    }
    const deleteCategory = async (_id:string) => {
        try {
            await api.delete(`/categories/${_id}`);
            window.location.reload();
        } catch (error) {
            console.log(error.message);
        }
    }
   
    useEffect(() => {
        getCategory();
    }, []);


    return (
        <div className='container'>
            <div className= "spacer"/>
            <div className='menu'>   {/* lado esquerdo */}
                <picture className='espaçamento-logo'>
                    <img src="../Imagens/POMODORC 1.png" alt="LOGO" />
                    {/* imagem encontrada na pasta public */}
                </picture>
                <div className="menubar">
                    
                    
                    <button onClick= {() => {setTaskModal (true); } }>CRIAR TAREFA</button>
                    <button onClick= {() => {setCategoryModal (true); } }>CRIAR LISTA</button>
                    <button>AJUSTES</button>
                </div>
            </div>

            <div className='content'>   {/* lado direito */}
                <header className='header-content'>
                    Olá Pessoa
                </header>

                <div className='content-app'>


                    {
                        category?.map(({ _id, name, tasks }) => {
                            return (                                 
                                <Lista name= {name} tasks={tasks} setEditCategoryModal={setEditCategoryModal}  setCategoryId={()=>{onChangeCategoryId(_id)}}/>
                            );
                        })
                    }
                   

                   {taskModal ? 
                   <div className ="taskModal">
                       <h1>CRIAR TAREFA</h1>
                       <RiCloseLine className= "closeTaskIcon" onClick= {()=> setTaskModal(false)}/>
                       <div className="form-item">
                            <h2>Nome:</h2><input onChange={e => { setTaskName(e.target.value) }} />
                       </div>
                       
                       <h2>Categoria:</h2>
                       <select value={categoryValue} onChange={(e:BaseSyntheticEvent) => onChangeSelect(e.target.value)}>
                       <option></option>
                            {
                                category?.map(({ _id, name}) => {
                                    return (
                                        <>
                                            <option value={_id}>{name}</option>
                                        </>
                                    );
                                })
                            }
                        
                           
                       </select>
                       <button className="createButton" onClick={() => {createTask(categoryValue)}}>CRIAR</button>
                   </div> : null}


                   {categoryModal ? 
                   <div className ="taskModal">
                       <h1>CRIAR LISTA</h1>
                       <RiCloseLine className= "closeCategoryIcon" onClick= {()=> setCategoryModal(false)}/>
                       <div className="form-item">
                            <h2>Nome:</h2><input onChange={e => { setCategoryName(e.target.value) }} />
                       </div>
                       <button onClick={() => {createCategory(categoryName)}}>CRIAR</button>
                   </div> : null}

                   {editCategoryModal ? 
                   <div className ="taskModal">
                       <h1>EDITAR LISTA</h1>
                       <RiCloseLine className= "closeCategoryIcon" onClick= {()=> setEditCategoryModal(false)}/>
                       <div className="form-item">
                            <h2>Nome:</h2>
                            <input onChange= { e => {setCategoryName(e.target.value)}}/>
                       </div>
                       <button onClick={()=> updateCategory(categoryName,categoryId)}>CRIAR</button>
                       <button >apagar</button>
                   </div> : null}
                </div>
            </div>
        </div>
    );
}

export default Aplicaçao;