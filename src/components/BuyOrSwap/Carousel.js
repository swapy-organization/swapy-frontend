import React from 'react';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack } from '@chakra-ui/react'
function ImgCarousel(props) {

    return (
        <Stack
            width='600px'
            height='100%'

        >
            <div className='container' >
                {props.imgs && props.imgs.map((img, index) => (
                    <div className='carousel' key={index}>
                        <img
                            src={img}
                            alt={index + 'item to be swapped or sold by user'}  
                            style={{
                                height: '500px',
                                width: '100%',
                                borderRadius: '4%'
                            }}
                        />
                    </div >
                ))}
            </div>

        </Stack>


    );
};

export default ImgCarousel;