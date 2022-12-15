import { React, useState, useEffect } from "react";
import axios from "axios";
import {
  Image,
  Center,
  Text,
  HStack,
  Button,
  Box,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
function UserProfile () {
  const [ data, setData ] = useState();
  const getUserInfo = async () => {
    const info = await axios.get( `${process.env.REACT_APP_BACKEND_LINK}/userinfo/${localStorage.getItem( 'id' )}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem( 'token' )}`
        }
      }
    );
    setData( info.data );
  };
  useEffect( () => {
    getUserInfo();
  }, [] );
  return (
    <>
      <NavBar />
      <Box bg='tomato' w='100%' p={5} color='white'>
        <Center>
          <Text color="black" fontSize={25} marginTop={100}>User Profile</Text>
        </Center>
      </Box>
      {data &&
        <>
          <HStack>
            <Image src={data.user.avatar} p={2} alt={data.user.username} h={150} w={150} />
            <Box>
              <FormControl borderColor='tomato' p={5} isRequired>
                <FormLabel> User</FormLabel>
                <Input placeholder={data.user.username} type='text' />
                <FormLabel>Location</FormLabel>
                <Input placeholder={`${data.user.country}  / ${data.user.city}`} type='text' />
                <FormLabel> Email</FormLabel>
                <Input placeholder={data.user.email} type='text' />
                <Button bg='tomato' m={1}> Save Change</Button>
              </FormControl>
            </Box>
              <Text fontSize={20} alignContent='center'>{data.user.points} Points for {data.user.username}</Text>
          </HStack>
          <HStack>
            {data.user.items ? data.user.items.map( ( item ) => {
              return (
                <Box key={item.id}
                  bg='tomato'
                  w='100%'
                  p={5}
                  color='white'
                  m={2}
                  borderRadius='md'
                >
                  {item.uploadedImages && item.uploadedImages.map( ( image, idx ) => {
                    return (
                      <Image src={image} p={2} alt={item.name} h={150} w={150} key={idx} />
                    );
                  } )}
                  <Text fontSize={20}>{item.name}</Text>
                  <Text fontSize={15}>{item.description}</Text>
                  <Text fontSize={15}>{item.price}</Text>
                <Button bg='black' m={1} > Delete Item</Button>
                <Button bg='black' m={1}> Edit Item</Button>
                </Box>
              );
            } ) : <Text> No Items</Text>}
          </HStack>
          <Footer/>
        </>
      }
    </>
  );
}
export default UserProfile;