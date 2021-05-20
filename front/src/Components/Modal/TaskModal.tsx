import React, { BaseSyntheticEvent } from 'react';
import { RiCloseLine } from "react-icons/ri";
import './style.css';

interface ICategory{
    name: string,
    _id: string,
    checked: boolean,
    tasks: string[]
}
const num = 20;
const TaskModal = ({ _id, name, setTaskName, setTaskModal, categoryValue, createTask, category, onChangeSelect}:{
    name: string,
    _id: string,
    categoryValue: string,
    category: ICategory[],
    setTaskModal: Function,
    setTaskName: Function,
    createTask: Function,
    onChangeSelect: Function

}) =>{
    return (
        <div className ="taskModal">
            <div className="modalTitle">
                <h1>CRIAR TAREFA</h1>
            </div>
            <RiCloseLine className= "closeTaskIcon" onClick= {()=> setTaskModal(false)}/>
            <div className="form-item">
                <h2>Nome:</h2>
                <input onChange={e => { setTaskName(e.target.value) }} maxLength = {num} className="input-item" />
            </div>
            
            <div className="category-item">
                <h2>Categoria:</h2>
                <select className= "select"value={categoryValue} onChange={(e:BaseSyntheticEvent) => onChangeSelect(e.target.value)}>
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
            </div>
            <button className="createButton" onClick={() => {createTask(categoryValue)}}>CRIAR</button>
    </div>
    );
}

export default TaskModal;