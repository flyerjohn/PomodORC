import React from 'react'
import { RiCloseLine } from "react-icons/ri";
import './style.css';

const VerifyModal= ({setEditCategoryModal, setVerifyModal,categoryId, deleteCategory}:{ 
    setEditCategoryModal: Function,
    setVerifyModal: Function,
    deleteCategory: Function
    categoryId: string
})=>{
    return(
<div className = "verifyModal">
 <h1> Tem certeza que deseja excluir <span>TODA</span> essa lista?</h1>
 <div className= "row">
 <button className= "verifyButton" onClick= {()=>{deleteCategory(categoryId)}}> SIM </button> 
 <div className="separate"/>
 <button className= "verifyButton" onClick= {()=> {setEditCategoryModal(false); setVerifyModal(false)}}>NÃO</button>
 </div>
</div>
    )}
export default VerifyModal