import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Components/taskCard.css";
import api from "../services/api";

import TaskCard from "./Helper/TaskCard";
import EditTaskModal from "./Modal/EditTaskModal";

interface ITask {
  name: string;
  checked: boolean;
  _id: string;
}
interface ITaskList {
  taskList: Array<ITask>;
}
const Carrosel = ({
  taskList,
  setRestModal,
  setEndRestModal,
  setEditTaskModal,
  setTaskId,
}: {
  taskList: ITask[];
  setRestModal: Function;
  setEndRestModal: Function;
  setTaskId: Function;
  setEditTaskModal: Function;

}) => {
  const [tasks, setTasks] = useState([]);

  let settings = {
    dot: true,
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        /* config responsividade */ breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const getTasks = async () => {
    try {
      const _task = await api.get("tasks");
      setTasks(_task.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const updateTasks = async (_id: string) => {
    try {
      await api.put(`tasks/${_id}`);
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };
  const deleteTask = async (_id: string) => {
    try {
      await api.delete(`tasks/${_id}`);
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);
  return (
    <Slider {...settings}>
      
      {taskList?.map(({ _id, name,checked }) => {
        
        return <TaskCard name={name} id={_id} setRestModal={setRestModal} 
        setEndRestModal={setEndRestModal} checked= {checked} 
        setEditTaskModal ={setEditTaskModal} setTaskId= {setTaskId}
        
        />;
        
      })}
     
    </Slider>
  );
};

export default Carrosel;
