import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Components/Carrosel.css';
import api from '../services/api';



interface ITask{
    name: string
    checked: boolean
    _id: string 
}
interface ITaskList {
    taskList: Array<ITask>;
}
const Carrosel = ({taskList} : ITaskList) => {
    const [tasks, setTasks] = useState([]);

    let settings = {
        dot:true,
        infinite:false,
        speed:600,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        responsive: [
            {       /* config responsividade */
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    const getTasks  = async () =>{
        try {
            const _task = await api.get('tasks');
            setTasks(_task.data);
        } catch (error) {
            console.log(error.message);
        }
    }
    const updateTasks  = async (_id: string) =>{
        try {
             await api.put(`tasks/${_id}`);            
            window.location.reload();
        } catch (error) {
            console.log(error.message);
        }
    }
    const deleteTask = async (_id: string) =>{
        try { 
            await api.delete(`tasks/${_id}`);           
            window.location.reload();
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getTasks(); 
    },[]);
    return (
        <Slider {...settings}>
            {
            taskList?.map(({_id,name})=>{
                return (
                    <div className='card-wrapper' >
                        <div className='card'>
                            <div className='card-task'>
                            <h2>
                               {name}
                             </h2>
                             <button onClick= {()=>deleteTask(_id)}> Apagar o bang</button>
                            </div>
                            
                        </div>
                    </div>
                );
            }) 
            }
        
         
            
        </Slider>
        
    );
}

export default Carrosel;