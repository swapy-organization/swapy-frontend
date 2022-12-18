import React from 'react';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";


function ImgCarousel ( props ) {

    return (
        <div>
            <Carousel fade>
                {props.imgs && props.imgs.map( ( img, index ) => (
                    <Carousel.Item key={index}>
                        <img
                            src={img}
                            className={'d-block w-100'}
                            alt={index + ' image of item to be swapped or sold '}
                            style={{
                                height: '500px',
                                width: '100%'
                            }}
                        />
                    </Carousel.Item>
                ) )}
            </Carousel>

        </div>
    );
};

export default ImgCarousel;