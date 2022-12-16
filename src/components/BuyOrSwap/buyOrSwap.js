import { HStack, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import ImgCarousel from "./Carousel";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ItemInfo from "./itemInfo";
import UserInfo from "./userInfo";
import Footer from "../Footer/Footer";

function BuyOrSwap () {
    const { id } = useParams();
    const [ item, setItem ] = useState( {} );
    const getItem = async () => {
        await axios.get( `${process.env.REACT_APP_BACKEND_LINK}/items/${id}` )
            .then( res => {
                setItem( res.data.item );
            }
            );
    };
    useEffect( () => {
        getItem();
    }, [] );
    return (
        <>
            <NavBar />
            {item ?
                <HStack 
                justifyContent={'space-around'}
                alignItems={'center'}
                p={'1.5rem'}
                overflow={'hidden'}
                >
                    <VStack
                    overflow={'hidden'}
                    >
                    <ImgCarousel imgs={item.uploadedImages} />
                    <UserInfo user={item.user} />
                    </VStack>
                    <ItemInfo item={item} />
                </HStack>
                : <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>}
            <Footer />
        </>

    );
}

export default BuyOrSwap;