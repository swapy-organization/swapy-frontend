// create the user profile
// please create the user profile UI with the following requirements:
// 1. the user profile should have a header with the following text: "Welcome to the user profile"
// 2. the user profile should have a footer with the following text: "swapy © 2021"
// 3. the user profile should have a main section with the following text: "This is the user profile"
// then you have to show the user data/information in this section
'use strict'
import { React, useState, useEffect } from "react"
import axios from "axios"
import cookies from "react-cookies";

import {
  Container,
  Image,
  Center,
  Heading,
  Text,
  VStack,
  HStack,

} from '@chakra-ui/react';

function UserProfile() {

  const [data, setData] = useState([])
  console.log(data)
  const id = {
    id: cookies.load("id")
  }
  const getUserInfo = async () => {
    const info = await axios.get(`http://localhost:3005/userprofile/1`)
    setData([info.data.user])

  }
  useEffect(() => {
    getUserInfo()

  }, [])


  return (
    <>
      <Center>
        <header>
          <Heading>
            <Text color="black " fontSize="40px">Welcome to the user profile</Text>
          </Heading>
        </header>
      </Center>
      <main>
        {data &&
          data.map((info, idx) => {
            return (
              <main key={idx}>
                <Container>
                  <VStack>

                    <Text color="black" fontSize="30px">This is the user profile</Text>
                  </VStack>
                  <Center>

                    <Image
                      borderRadius='full'
                      boxSize='150px'
                      src='https://bit.ly/dan-abramov'
                      alt='Dan Abramov'
                    />
                  </Center>
                  <VStack>
                    <Heading color="black">{info.firstName}{" "}{info.lastName}</Heading>
                    <Heading fontSize="20px" color="black"> Email: {info.email}</Heading>
                    <Heading fontSize="20px" color="black"> Country: {info.country}</Heading>
                  </VStack>



                </Container>
              </main>
            )

          })
        }


      </main>
    </>

  )
}

export default UserProfile


// const UserProfile = ({ data }) => {
//   return (
//     <Container mt={4}>
//       <UserImage pic={data.pic} name={data.name} />
//       <Center>
//         <VStack>
//           <Heading>{data.name}</Heading>
//           <Text color="gray">
//             {data.profileTagLine} {', '} {data.location}
//           </Text>
//           <SocialProfiles data={data.socialProfiles} />
//           <Text>{data.bio}</Text>
//           <HStack>
//             {data.skills.map(skill => (
//               <Tag colorScheme="blue" key={skill}>
//                 {skill}
//               </Tag>
//             ))}
//           </HStack>
//         </VStack>
//       </Center>
//     </Container>
//   );
// };