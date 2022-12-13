'use strict'
import { React, useState, useEffect } from "react"
import axios from "axios"
import cookies from "react-cookies";
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
  Textarea
} from '@chakra-ui/react';
function UserProfile() {
  const [data, setData] = useState([])
  console.log(data)
  const id = {
    id: cookies.load("id")
  }
  const getUserInfo = async () => {
    const info = await axios.get(`https://swapybackend.herokuapp.com/userprofile/2`)
    setData([info.data.user])
  }
  useEffect(() => {
    getUserInfo()
  }, [])
  return (
    <>
      <Box bg='tomato' w='100%' p={5} color='white'>
        <Center>
          <Text color="white" fontSize={25}>User Profile</Text>
        </Center>
      </Box>
      {data &&
        data.map((info, idx) => {
          return (
            <>
              <HStack>
                <Image src='https://bit.ly/dan-abramov' p={2} alt='Dan Abramov' />
                <Box>
                  <FormControl borderColor='tomato' p={5} isRequired>
                    <FormLabel> User</FormLabel>
                    <Input placeholder={info.username} />
                    <FormLabel>Location</FormLabel>
                    <Input placeholder={`${info.country}  / ${info.city}`} />
                    <FormLabel >User interestes</FormLabel>
                    <Input m={.5} placeholder='Cars' />
                    <FormLabel> Bio</FormLabel>
                    <Textarea
                      placeholder='bio'
                      size='sm' />
                    <Button bg='tomato' m={1}> Save Change</Button>
                    <Button bg='tomato'>Delete User</Button>
                  </FormControl>
                </Box>
              </HStack>
              {/* {
                info.items.map((ITEM, idx) => {
                  return (
                    <div key={idx}>
                      {console.log(ITEM)}
                    </div>
                  )
                })
              } */}
              <HStack>
                <Text m={1}>this use didn't have items</Text>
              </HStack>
            </>
          )
        })
      }
    </>
  )
}
export default UserProfile