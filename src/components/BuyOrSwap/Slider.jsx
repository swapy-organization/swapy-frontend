import "./style.scss";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { useState } from "react";
import React from 'react';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack } from '@chakra-ui/react'

function ImgCarousel  (props) {
   const [current, setCurrent] = useState(0);

   const nextSlide = () => {
      setCurrent(current === props.length - 1 ? 0 : current + 1);
   };
   const prevSlide = () => {
      setCurrent(current === 0 ? props.length - 1 : current - 1);
   };

   return (
      <div className="slider">
         <Stack>
         <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
         <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
         {props.imgs && props.imgs.map((img, index) => {
            return current === index ? (
               <div key={index} className="slide12" >
                  <img src={img} alt="images" />
               </div>
            ) : null;
         })}
         </Stack>
      </div>
   );
};
export default ImgCarousel;
