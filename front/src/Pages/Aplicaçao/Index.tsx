import React, { useState, useEffect, BaseSyntheticEvent } from "react";
import "./style.css";
import api from "../../services/api";
import Lista from "../../Components/Modal/Lista";
import TaskModal from "../../Components/Modal/TaskModal";
import CategoryModal from "../../Components/Modal/CategoryModal";
import EditCategoryModal from "../../Components/Modal/EditCategoryModal";
import VerifyModal from "../../Components/Modal/VerifyModal";
import RestModal from "../../Components/Modal/RestModal";

const Aplicaçao: React.FC = () => {
  const [category, setCategory] = useState([]);
  const [taskModal, setTaskModal] = useState(false);
  const [categoryModal, setCategoryModal] = useState(false);
  const [editCategoryModal, setEditCategoryModal] = useState(false);
  const [verifyModal, setVerifyModal] = useState(false);
  const [restModal, setRestModal] = useState(false);
  const [endRestModal, setEndRestModal] = useState(false);
  const [categoryValue, setCategoryValue] = useState<string>("");
  const [taskName, setTaskName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [categoryId, setCategoryId] = useState("");

  function onChangeSelect(value: string) {
    setCategoryValue(value);
  }

  function onChangeCategoryId(value: string) {
    setCategoryId(value);
  }

  const createTask = async (_id: string) => {
    try {
      await api.post(`task/${_id}`, {
        name: taskName,
      });
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  const getCategory = async () => {
    try {
      const _category = await api.get("categories");
      setCategory(_category.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const createCategory = async (name: string) => {
    try {
      await api.post("/category", {
        name: name,
      });
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateCategory = async (name: string, _id: string) => {
    try {
      await api.put(`/categories/${_id}`, {
        name: name,
      });
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteCategory = async (_id: string) => {
    try {
      await api.delete(`/categories/${_id}`);
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="backgroundApp">
      <div className="container">
        {taskModal || categoryModal || editCategoryModal ? (
          <div className="backgroundModal" />
        ) : null}

        <div className="spacer" />
        <div className="menu">
          <picture className="espaçamento-logo">
            <img src="../Imagens/POMODORC 1.png" alt="LOGO" />
          </picture>

          <div className="menubar">
            <button
              onClick={() => {
                setTaskModal(true);
              }}
            >
              CRIAR TAREFA
            </button>
            <button
              onClick={() => {
                setCategoryModal(true);
              }}
            >
              CRIAR LISTA
            </button>
          </div>
        </div>

        <div className="content">
          <header className="header-content">Olá Pessoa!</header>

          <div className="content-app">
            {category?.map(({ _id, name, tasks }) => {
              return (
                <Lista
                  name={name}
                  setRestModal={setRestModal}
                  setEndRestModal={setEndRestModal}
                  tasks={tasks}
                  setEditCategoryModal={setEditCategoryModal}
                  setCategoryId={() => {
                    onChangeCategoryId(_id);
                  }}
                />
              );
            })}

            {taskModal ? (
              <TaskModal
                name={categoryName}
                _id={categoryId}
                categoryValue={categoryValue}
                category={category}
                setTaskModal={setTaskModal}
                setTaskName={setTaskName}
                createTask={createTask}
                onChangeSelect={onChangeSelect}
              />
            ) : null}

            {categoryModal ? (
              <CategoryModal
                setCategoryModal={setCategoryModal}
                categoryName={categoryName}
                setCategoryName={setCategoryName}
                createCategory={createCategory}
              />
            ) : null}

            {editCategoryModal ? (
              <EditCategoryModal
                categoryId={categoryId}
                categoryName={categoryName}
                setCategoryName={setCategoryName}
                updateCategory={updateCategory}
                deleteCategory={deleteCategory}
                setEditCategoryModal={setEditCategoryModal}
                setVerifyModal={setVerifyModal}
              />
            ) : null}
            {verifyModal ? (
              <VerifyModal
                setEditCategoryModal={setEditCategoryModal}
                setVerifyModal={setVerifyModal}
                categoryId={categoryId}
                deleteCategory={deleteCategory}
              />
            ) : null}

            {restModal ? <RestModal setRestModal={setRestModal} title="Descanso!" setEndRestModal={setEndRestModal} /> : null}
            {endRestModal ? <RestModal setRestModal={setRestModal} title="Fim do Descanso!" setEndRestModal={setEndRestModal} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aplicaçao;
