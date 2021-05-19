import React, { BaseSyntheticEvent } from 'react';
import { RiCloseLine } from "react-icons/ri";

const CategoryModal = ({setCategoryModal, categoryName, setCategoryName, createCategory}:{
    setCategoryModal: Function,
    categoryName: string,
    setCategoryName: Function,
    createCategory: Function
}) => {
    return(
        <div className ="taskModal">
        <h1>CRIAR LISTA</h1>
            <RiCloseLine className= "closeCategoryIcon" onClick= {()=> setCategoryModal(false)}/>
            <div className="form-item">
                <h2>Nome:</h2><input onChange={e => { setCategoryName(e.target.value) }} />
            </div>
            <button onClick={() => {createCategory(categoryName)}}>CRIAR</button>
        </div>
    );
}

export default CategoryModal;