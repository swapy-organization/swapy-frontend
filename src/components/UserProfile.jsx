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
  Card,
  VStack,
  Heading
} from '@chakra-ui/react';
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import { Link } from "react-router-dom";
import '../scss/UserProfile.scss'
import { CardBody, CardFooter, CardHeader } from "reactstrap";


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
      <Box bg='#F5EFE6' w='100%' p={2} color='white' m={1}>
        <Text color="#393E46" fontSize={30} marginTop={100} > User Profile</Text>
      </Box>
      {
        data &&
        <>
          <VStack bg={'#AEBDCA'}>
            {/* <Image src={data.user.avatar} p={2} alt={data.user.username} h={150} w={150} /> */}



            <Card bg={'#7895B2'} m={20} w='25%'>
              <CardHeader>
                <Center>
                  <Image p={4} borderRadius='full' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                </Center>
              </CardHeader>
              <CardBody>
                <FormControl borderColor=' #E8DFCA' p={5} isRequired>
                  <FormLabel fontSize="30px" color="#E8DFCA">User</FormLabel>
                  <Input fontSize="20px" placeholder={data.user.username} type='text' m={1} />
                  <FormLabel fontSize="30px" color="#E8DFCA">Location</FormLabel>
                  <Input fontSize="20px" placeholder={`${data.user.country}  / ${data.user.city}`} type='text' m={1} />
                  <FormLabel fontSize="30px" color="#E8DFCA"> Email</FormLabel>
                  <Input fontSize="20px" placeholder={data.user.email} type='text' m={1} /><br />
                </FormControl>
              </CardBody>

              <CardFooter>

                <Button size='lg' colorScheme='blue' variant='outline' bg='#E8DFCA' m={2}> Save Change</Button>
              </CardFooter>

            </ Card>
            <Box >
              <Badge m={2} fontSize={20} variant='solid' colorScheme='green'>{data.user.points} Points for {data.user.username}</Badge>
            </Box>
          </VStack>
          <HStack m={2}>
            {data.user.items ? data.user.items.map((item) => {
              return (
                <Card key={item.id}
                  bg='#7895B2'
                  w='100%'>

                  {item.uploadedImages && item.uploadedImages.map((image, idx) => {
                    return (
                      <CardHeader>
                        <Center>
                          <Image borderRadius='full'
                            src={image} p={2} alt={item.name} h={230} w={230} key={idx} />
                        </Center>
                      </CardHeader>

                    );
                  })}

                  <CardBody>
                    <Text as='i' color="#E8DFCA" fontSize='2xl'>{item.name}</Text>
                    <Text as='i' color="#E8DFCA" fontSize='2xl'>{item.description}</Text>
                    <Text as='i' color="#E8DFCA" fontSize='2xl'>{item.price}</Text>
                  </CardBody>
                  <CardFooter>
                    <Button size='lg' colorScheme='blue' variant='outline' bg='#E8DFCA' m={1} onClick={e => handleDelete(e, item.id)} > Delete Item</Button>
                    <Link to={`/edititem/${item.id}`}>
                      <Button size='lg' colorScheme='blue' variant='outline' bg='#E8DFCA' m={1} > Edit Item</Button>
                    </Link>
                  </CardFooter>
                </Card>
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