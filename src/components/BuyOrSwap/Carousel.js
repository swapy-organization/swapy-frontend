import React from 'react';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
import { Stack } from '@chakra-ui/react'

function ImgCarousel(props) {

    return (
        <Stack
            width='600px'
            height='100%'

        >
            <Carousel fade>
                {props.imgs && props.imgs.map((img, index) => (
                    <Carousel.Item key={index}>
                        <img
                            src={img}
                            // src='https://th.bing.com/th/id/OIP.EcYcq7BvJiKxhigjpv_jPQHaEW?pid=ImgDet&w=2048&h=1202&rs=1'
                            // className={'d-block w-100'}
                            alt={index + ' image of item to be swapped or sold '}
                            style={{
                                height: '500px',
                                width: '90%',
                                borderRadius: '4%'
                            }}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>

        </Stack>


    );
};

export default ImgCarousel;