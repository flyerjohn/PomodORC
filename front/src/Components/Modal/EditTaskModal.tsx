import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import "./style.css";
import VerifyModal from "./VerifyModal";
interface ITask {
  name: string;
  checked: boolean;
  _id: string;
}
const EditTaskModal = ({
  categoryId,
  categoryName,
  setCategoryName,
  updateTask,
  deleteTask,
  setEditTaskModal,
  
  
}: {
  categoryId: string;
  categoryName: string;
  setCategoryName: Function;
  updateTask: Function;
  deleteTask: Function;
  setEditTaskModal: Function;
  
}) => {
  return (
    <div className="taskModal">
      <div className="modalTitle">
        <h1>EDITAR TAREFA</h1>
      </div>
      <RiCloseLine
        className="closeCategoryIcon"
        onClick={() => setEditTaskModal(false)}
      />
      <div className="form-item">
        <h2>Nome:</h2>
        <input
          className="input-item"
          onChange={(e) => {
            setCategoryName(e.target.value);
          }}
        />
      </div>
      <button
        className="createButton"
        onClick={() => updateTask(categoryName, categoryId)}
      >
        CRIAR
      </button>
      <IoMdTrash className="trash-item" onClick={() => {}} />
    </div>
  );
};

export default EditTaskModal;
