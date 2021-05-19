import React from 'react';
import { RiCloseLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import './../../Pages/Aplicaçao/style.css';


const EditCategoryModal = ({categoryId, categoryName,setCategoryName, updateCategory, deleteCategory,setEditCategoryModal}:{
    categoryId: string,
    categoryName: string,
    setCategoryName: Function,
    updateCategory: Function,
    deleteCategory: Function,
    setEditCategoryModal: Function
}) => {
    return(
        <div className ="taskModal">
            <h1>EDITAR LISTA</h1>
            <RiCloseLine className= "closeCategoryIcon" onClick= {()=> setEditCategoryModal(false)}/>
            <div className="form-item">
                    <h2>Nome:</h2>
                    <input className="input-item" onChange= { e => {setCategoryName(e.target.value)}}/>
            </div>
            <button className="createButton" onClick={()=> updateCategory(categoryName,categoryId)}>CRIAR</button>
            <IoMdTrash className="trash-item" onClick={()=> deleteCategory(categoryId)}/>
        </div> 
    );
}

export default EditCategoryModal;