import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Components/Carrosel.css'

const Carrosel = () => {
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
    return (
        <Slider {...settings}>
            <div className='card-wrapper'>
                <div className='card'>
                    <div className='card-task'>
                        <h2>
                            passear com o dog
                        </h2>

                    </div>
                </div>
            </div>

            <div className='card-wrapper'>
                <div className='card'>
                    <div className='card-task'>
                        <h2>
                            passear com o dog
                        </h2>

                    </div>
                </div>
            </div>

            <div className='card-wrapper'>
                <div className='card'>
                    <div className='card-task'>
                        <h2>
                            passear com o dog
                        </h2>

                    </div>
                </div>
            </div>

            
        </Slider>
        
    );
}

export default Carrosel;