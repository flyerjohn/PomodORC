import React from 'react'
import { RiCloseLine } from "react-icons/ri";
import './style.css';

const VerifyTaskModal= ({setEditTaskModal, setVerifyTaskModal,taskId, deleteTask}:{ 
    setEditTaskModal: Function,
    setVerifyTaskModal: Function,
    deleteTask: Function
    taskId: string
})=>{
    return(
    <div className = "verifyModal">
        <h1> Tem certeza que deseja excluir <span>ESSA</span>  tarefa</h1>
        <div className= "row">
            <button className= "verifyButton" onClick= {()=>{deleteTask(taskId)}}> SIM </button> 
                <div className="separate"/>
            <button className= "verifyButton" onClick= {()=> {setEditTaskModal(false); setVerifyTaskModal(false)}}>NÃO</button>
        </div>
    </div>
    )}
export default VerifyTaskModal