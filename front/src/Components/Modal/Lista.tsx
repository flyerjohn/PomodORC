import React from 'react';
import { FiEdit } from "react-icons/fi";
import Carrosel from '../../Components/Carrosel';
import './../../Pages/Aplicaçao/style.css';

interface ITask{
    name: string
    checked: boolean
    _id: string 
}


const Lista = ({name, tasks, setEditCategoryModal, setCategoryId}:{
    name: string,
    tasks: ITask[],
    setEditCategoryModal: Function,
    setCategoryId: Function

}) => {
    return (
        <>  
        <div className="titleContainer">
            <h1 className="listTitle"> {name} </h1>
            <FiEdit className= "editListIcon" onClick= {() => {setEditCategoryModal (true);setCategoryId()}}/>
        </div>
            <Carrosel taskList={tasks} />
       
        </>
    );
}
export default Lista;

