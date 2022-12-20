import { Flex, HStack, VStack, Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import ImgCarousel from "./Slider";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ItemInfo from "./itemInfo";
import UserInfo from "./userInfo";
import PageNotFound from "../../404";

function BuyOrSwap() {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [error, setError] = useState(false);
    const getItem = async () => {
        await axios.get(`${process.env.REACT_APP_BACKEND_LINK}/items/${id}`)
            .then(res => {
                setItem(res.data.item);
            }).catch(err => {
                setError(true);
            });
    };
    useEffect(() => {
        getItem();
    }, []);

    return (

        <Flex
            direction={'column'}
            h={'100vh'}

        >
            <Center
                h="100vh"
                w="100%"
                bg={"url(" + require("assets/img/antoine-barres.jpg") + ")"}
                width="100%"
                bgSize="cover"
                repeat="no-repeat"
                overflow="hidden"
            >

                {!error ?
                    item.user ?
                        <>
                            <NavBar />
                            <HStack
                                // justifyContent={'space-around'}
                                // alignItems={'center'}
                                // p={'1.5rem'}
                                // overflow={'hidden'}
                                mt='80px'
                                opacity="0.9"
                                boxShadow="md"
                                alignItems="center"
                                h="85%"
                                w='90%'
                                bg={"white"}
                                p="20"
                                rounded="md"
                                spacing={'5em'}
                            >
                                <ImgCarousel imgs={item.uploadedImages} />
                                <VStack
                                    overflow={'hidden'}
                                >
                                    <UserInfo user={item.user} />
                                    <ItemInfo item={item} />
                                </VStack>
                            </HStack>
                        </>
                        :
                        <VStack
                            h={'100vh'}
                            justifyContent={'center'}
                            alignItems={'center'}
                        >
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        </VStack>
                    : <PageNotFound />
                }
            </Center>
        </Flex>

    );
}

export default BuyOrSwap;