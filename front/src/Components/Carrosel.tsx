import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Components/Carrosel.css';
import api from '../services/api';



const Carrosel = () => {
    const [tasks, setTasks] = useState([]);

    let settings = {
        dot:true,
        infinite:true,
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
                infinite: true,
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

    useEffect(() => {
        getTasks(); 
    },[]);
    return (
        <Slider {...settings}>
            {
            tasks?.map(({_id,name})=>{
                return (
                    <div className='card-wrapper' onClick = { ()=> {console.log(tasks)}}>
                        <div className='card'>
                            <div className='card-task'>
                            <h2>
                               {name}
                             </h2>

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