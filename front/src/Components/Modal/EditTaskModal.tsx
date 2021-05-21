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
const EditTaskModal = ({ _id, name, setTaskName, setEditTaskModal, categoryValue, updateTask, category, onChangeSelect}:{
    name: string,
    _id: string,
    categoryValue: string,
    category: ICategory[],
    setEditTaskModal: Function,
    setTaskName: Function,
    updateTask: Function,
    onChangeSelect: Function

}) =>{
    return (
        <div className ="taskModal">
            <div className="modalTitle">
                <h1>EDITAR TAREFA</h1>
            </div>
            <RiCloseLine className= "closeTaskIcon" onClick= {()=> setEditTaskModal(false)}/>
            <div className="form-item">
                <h2>Nome:</h2>
                <input onChange={e => { setTaskName(e.target.value) }} maxLength = {num} className="input-item" />
            </div>
            
            
            <button className="createButton" onClick={() => {updateTask(categoryValue); console.log(categoryValue)}}>CRIAR</button>
    </div>
    );
}

export default EditTaskModal;