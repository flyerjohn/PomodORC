import React, { BaseSyntheticEvent } from 'react';
import { RiCloseLine } from "react-icons/ri";
import './style.css';

const CategoryModal = ({setCategoryModal, categoryName, setCategoryName, createCategory}:{
    setCategoryModal: Function,
    categoryName: string,
    setCategoryName: Function,
    createCategory: Function
}) => {
    return(
        <div className ="taskModal">
            <div className="modalTitle">
                <h1>CRIAR LISTA</h1>
            </div>
            <RiCloseLine className= "closeCategoryIcon" onClick= {()=> setCategoryModal(false)}/>
            <div className="form-item">
                <h2>Nome:</h2><input className="input-item" onChange={e => { setCategoryName(e.target.value) }} />
            </div>
            <button className= "createButton" onClick={() => {createCategory(categoryName)}}>CRIAR</button>
        </div>
    );
}

export default CategoryModal;