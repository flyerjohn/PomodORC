import React from 'react';
import { RiCloseLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import './style.css';
import VerifyModal from './VerifyModal';


const EditCategoryModal = ({categoryId, categoryName,setCategoryName, updateCategory, deleteCategory,setEditCategoryModal,setVerifyModal}:{
    categoryId: string,
    categoryName: string,
    setCategoryName: Function,
    updateCategory: Function,
    deleteCategory: Function,
    setEditCategoryModal: Function,
    setVerifyModal: Function
}) => {
    return(
        
        <div className ="taskModal">
            <div className="modalTitle">
                <h1>EDITAR LISTA</h1>
            </div>
            <RiCloseLine className= "closeCategoryIcon" onClick= {()=> setEditCategoryModal(false)}/>
            <div className="form-item">
                    <h2>Nome:</h2>
                    <input className="input-item" onChange= { e => {setCategoryName(e.target.value)}}/>
            </div>
            <button className="createButton" onClick={()=> updateCategory(categoryName,categoryId)}>CRIAR</button>
            <IoMdTrash className="trash-item" onClick={ ()=> setVerifyModal(true)}/>
        </div> 
       
        
    );
}

export default EditCategoryModal;