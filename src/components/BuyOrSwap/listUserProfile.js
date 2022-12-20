import NavBar from "../NavBar/NavBar";
import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Flex, Spinner, Center, VStack, HStack, Image, Text, Avatar } from "@chakra-ui/react";
import axios from "axios";
import PageNotFound from "../../404";

function ListUserProfile(props) {
    const [user, setUser] = React.useState({});
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const { id } = useParams();
    const getUser = async () => {
        await axios.get(`${process.env.REACT_APP_BACKEND_LINK}/userprofile/${id}`).then(res => {
            console.log(res.data)
            setUser(res.data.user);
            setLoading(false);
        }).catch(err => {
            setError(true);
        });
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        loading ?
            <Flex h={'100vh'} justifyContent={'center'} alignItems={'center'}>
                <Spinner animation="border" variant="primary" />
            </Flex>
            :
            error ?
                <PageNotFound />
                :
                <>
                    <NavBar />
                    <Flex h="50px"
                    >
                        <Center
                            h="100vh"
                            w="100%"
                            bg={"url(" + require("assets/img/antoine-barres.jpg") + ")"}
                            bgSize="cover"
                            repeat="no-repeat"
                            overflow="hidden"
                        >
                            <HStack
                                flexDirection='column'
                                opacity="0.6"
                                bg='white'
 
                                // alignItems="center"
                                // mt='70px'
                                // h="60%"
                                // w="92%"
                                // bg={"#FDF9FF"}
                                // p="20"
                                rounded="md"
                                overflow='hidden'
                                // justifyContent='space-evenly'
                                w={'50%'}
                                padding='1px'
                                justifyContent='space-between'
                                h={'70%'}
                                p='1em'
                                fontSize={'5xl'}
                                fontStyle={'italic'}
                                justify='left'

                                borderBlock='solid'
                                boxShadow='-moz-initial'
                                backgroundColor='white'
                            >
                                <Text
                                    alignContent={'center'}
                                    fontSize='6xl'
                                    marginBlockEnd='100px'
                                >User Information</Text>
                                <HStack>

                                    <VStack
                                        justify={'left'}
                                        fontSize='2xl'
                                        borderBlock='solid'
                                        mr='300px'
                                        mb='150px'
                                    >

                                        <Text
                                            fontFamily='monospace'
                                            // opacity='0.7'
                                            fontSize='xl'
                                            borderBottom={'groove'}
                                            bg='azure'
                                        >

                                            Full Name: {user.firstName} {user.lastName}
                                        </Text>
                                        <Text
                                            fontFamily='monospace'
                                            // opacity='0.7'
                                            justify={'left'}
                                            fontSize='xl'
                                            borderBottom={'groove'}
                                            bg='azure'>
                                            User Name:  {user.username}
                                        </Text>

                                        <Text
                                            fontFamily='monospace'
                                            // opacity='0.7'
                                            justify={'left'}
                                            fontSize='xl'
                                            borderBottom={'groove'}
                                            bg='azure'>
                                            Email: {user.email}
                                        </Text>
                                        <Text
                                            fontFamily='monospace'
                                            // opacity='0.7'
                                            justify={'left'}
                                            fontSize='xl'
                                            borderBottom={'groove'}
                                            bg='azure'>
                                            Country: {user.country}
                                        </Text>
                                        <Text
                                            fontFamily='monospace'
                                            // opacity='0.7'
                                            justify={'left'}
                                            fontSize='xl'
                                            borderBottom={'groove'}
                                            bg='azure'>
                                            Country: {user.city}
                                        </Text>
                                    </VStack>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <VStack
                                     
                                    >
                                        <Text>Avatar: </Text>
                                        <Image style={{marginBottom:'10rem'}} src={user.avatar} />
                                    </VStack>

                                </HStack>


                            </HStack>

                        </Center>

                    </Flex>
                </>

    );
}

export default ListUserProfile;