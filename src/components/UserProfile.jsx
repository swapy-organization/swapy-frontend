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
  Badge,
  VStack,
} from '@chakra-ui/react';
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import { Link } from "react-router-dom";
import '../scss/UserProfile.scss'


function UserProfile() {
  const [data, setData] = useState();

  const getUserInfo = async () => {
    const info = await axios.get(`${process.env.REACT_APP_BACKEND_LINK}/userinfo/${localStorage.getItem('id')}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
    setData(info.data);
  };

  const handleDelete = async (e, id) => {
    e.preventDefault();
    await axios.delete(`${process.env.REACT_APP_BACKEND_LINK}/items/${id}`);
    getUserInfo();
  };


  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <>
      <NavBar />
      <Box bg='#33383c' w='100%' p={2} color='white' m={1}>
        <Text p={3} color="gold" fontSize={30}  > User Profile</Text>
      </Box>

      {
        data &&
        <>
          <Box bg={'#33383c'}>
            {/* <Image src={data.user.avatar} p={2} alt={data.user.username} h={150} w={150} /> */}



            <Box >


              <Image p={8} borderRadius='full' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
              <HStack>
                <FormControl borderColor='gold' p={5} isRequired>
                  <FormLabel fontSize="30px" color="gold">User</FormLabel>
                  <Input fontSize="20px" placeholder={data.user.username} type='text' m={1} />
                  <FormLabel fontSize="30px" color="gold">Location</FormLabel>
                  <Input fontSize="20px" placeholder={`${data.user.country}  / ${data.user.city}`} type='text' m={1} />
                  <FormLabel fontSize="30px" color="gold"> Email</FormLabel>
                  <Input fontSize="20px" placeholder={data.user.email} type='text' m={1} />

                  <Button bg='gold' m={1}> Save Change</Button>
                </FormControl>
              </HStack>
            </Box >
            <Box >
              <Badge m={20} fontSize={20} variant='solid' colorScheme='green'>{data.user.points} Points for {data.user.username}</Badge>
            </Box>
          </Box>
          <HStack>
            {data.user.items ? data.user.items.map((item) => {
              return (
                <Box key={item.id}
                  bg='#33383c'
                  w='100%'
                  p={5}
                  color='white'
                  m={2}
                  borderRadius='md'

                >

                  {item.uploadedImages && item.uploadedImages.map((image, idx) => {
                    return (
                      <Image borderRadius='full'
                        src={image} p={2} alt={item.name} h={230} w={230} key={idx} />
                    );
                  })}


                  <Text color="gold" fontSize={20}>{item.name}</Text>
                  <Text color="gold" fontSize={15}>{item.description}</Text>
                  <Text color="gold" fontSize={15}>{item.price}</Text>
                  <Button bg='gold' m={1} onClick={e => handleDelete(e, item.id)} color="black"> Delete Item</Button>
                  <Link to={`/edititem/${item.id}`}>
                    <Button bg='gold' m={1} color="black"> Edit Item</Button>
                  </Link>
                </Box>
              );
            }) : <Text> No Items</Text>}
          </HStack>
          <Footer />
        </>
      }
    </>
  );
}
export default UserProfile;