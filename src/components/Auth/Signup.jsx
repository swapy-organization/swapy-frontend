import React from "react";
import Form from "react-bootstrap/Form";
import { Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faEnvelope,
  faLock,
  faUserTie,
  faCity,
} from "@fortawesome/free-solid-svg-icons";
import { Flex, Box } from "@chakra-ui/react";
import {
  Heading,
  Stack,
  InputGroup,
  Input,
  InputLeftAddon,
  Button,
  FormControl,
  Text,
  Center,
  Select,
  Avatar,
} from "@chakra-ui/react";

import { useAuth } from "../../ContextAPI/Context/authContext";

export default function SignupCard() {
  // const [ showPassword, setShowPassword ] = useState( false );
  const { handleSignUp, auth } = useAuth();
  console.log(auth);
  return (
    <Flex h="50px">
      <Center
        h="100vh"
        w="100%"
        bg={"url(https://4kwallpapers.com/images/walls/thumbs_3t/5889.jpg)"}
        width="100%"
        bgSize="cover"
        repeat="no-repeat"
        overflow="hidden"
      >
        <Stack
          opacity="0.9"
          boxShadow="md"
          alignItems="center"
          bg={"#fdf9ff"}
          p="20"
          rounded="md"
        >
                  <Avatar bg="grey" />

          <Heading as="h1" color="black">
            SIGN UP NOW
          </Heading>
          <Text fontSize="lg" color="black">
            You like swapping? Join Us
          </Text>
          <Stack justify="center" color="gray">
            <Form onSubmit={(e) => handleSignUp(e)}>
              <FormControl pb="1em" borderColor="black" isRequired>
                <InputGroup
                  variant="outline"
                  borderRadius="5px"
                  borderBlock="cadetblue"
                  width="305px"
                  height="35px"
                >
                  <InputLeftAddon
                    pointerEvents="none"
                    width="30px"
                    height="35px"
                    border="none"
                    justifyContent="center"
                    children={
                      <FontAwesomeIcon color="black" icon={faUserCircle} />
                    }
                  />
                  <Input
                    type="text"
                    id="username"
                    h="35px"
                    variant="filled"
                    width="300px"
                    borderX="none"
                    borderBlockEnd="none"
                    borderBlock="none"
                    pr="5rem"
                    placeholder="Username"
                  />
                </InputGroup>
          <FormControl pb="1em" borderColor="black" isRequired>
              <input type="file" name="avatar" />
              </FormControl>
              </FormControl>
              <FormControl pb="1em" borderColor="black" isRequired>
                <InputGroup
                  variant="outline"
                  borderRadius="5px"
                  borderBlock="cadetblue"
                  width="305px"
                  height="35px"
                >
                  <InputLeftAddon
                    pointerEvents="none"
                    width="30px"
                    height="35px"
                    border="none"
                    justifyContent="center"
                    children={
                      <FontAwesomeIcon color="black" icon={faUserCircle} />
                    }
                  />
                  <Input
                    type="text"
                    id="firstname"
                    h="35px"
                    variant="filled"
                    width="300px"
                    borderX="none"
                    borderBlockEnd="none"
                    borderBlock="none"
                    pr="5rem"
                    placeholder="First Name"
                  />
                </InputGroup>
              <FormControl pb="1em" borderColor="black" isRequired>
                <InputGroup
                  variant="outline"
                  borderRadius="5px"
                  borderBlock="cadetblue"
                  width="305px"
                  height="35px"
                >
                  <InputLeftAddon
                    pointerEvents="none"
                    width="30px"
                    height="35px"
                    border="none"
                    justifyContent="center"
                    children={
                      <FontAwesomeIcon color="black" icon={faUserCircle} />
                    }
                  />
                  <Input
                    type="text"
                    id="lastname"
                    variant="filled"
                    h="35px"
                    width="300px"
                    borderX="none"
                    borderBlockEnd="none"
                    borderBlock="none"
                    pr="5rem"
                    placeholder="Last Name"
                  />
                </InputGroup>
              </FormControl>
              </FormControl>
              <FormControl pb="1em" borderColor="black" isRequired>
                <InputGroup
                  variant="outline"
                  borderRadius="5px"
                  h="35px"
                  borderBlock="cadetblue"
                  width="305px"
                  height="35px"
                >
                  <InputLeftAddon
                    pointerEvents="none"
                    width="30px"
                    height="35px"
                    border="none"
                    justifyContent="center"
                    children={
                      <FontAwesomeIcon color="black" icon={faEnvelope} />
                    }
                  />
                    <Input
                      type="email"
                      placeholder="Email"
                      h="35px"
                      id="email"
                      variant="filled"
                      width="300px"
                      borderX="none"
                      borderBlockEnd="none"
                      borderBlock="none"
                      pr="5rem"
                    />
                  </InputGroup>
              </FormControl>

              <FormControl pb="1em" borderColor="black" isRequired>
                <InputGroup
                  variant="outline"
                  borderRadius="5px"
                  borderBlock="cadetblue"
                  width="305px"
                  height="35px"
                >
                  <InputLeftAddon
                    pointerEvents="none"
                    width="30px"
                    height="35px"
                    border="none"
                    justifyContent="center"
                    children={<FontAwesomeIcon color="black" icon={faLock} />}
                  />
                  <Input
                    type="password"
                    id="password"
                    h="35px"
                    placeholder="Your password..."
                    variant="filled"
                    width="300px"
                    borderX="none"
                    borderBlockEnd="none"
                    borderBlock="none"
                    pr="5rem"
                  />
                </InputGroup>
              <FormControl pb="1em" borderColor="black" isRequired>
                <InputGroup
                  variant="outline"
                  borderRadius="5px"
                  borderBlock="cadetblue"
                  width="305px"
                  height="35px"
                >
                  <InputLeftAddon
                    pointerEvents="none"
                    width="30px"
                    height="35px"
                    border="none"
                    justifyContent="center"
                    children={<FontAwesomeIcon color="black" icon={faLock} />}
                  />
                  <Input
                    type="password"
                    id="confirmPassword"
                    h="35px"
                    placeholder="Confirm password"
                    variant="filled"
                    width="300px"
                    borderX="none"
                    borderBlockEnd="none"
                    borderBlock="none"
                    pr="5rem"
                  />
                </InputGroup>
              </FormControl>
              </FormControl>

              <FormControl pb="1em" borderColor="black" isRequired>
                <InputGroup
                  variant="outline"
                  borderRadius="5px"
                  borderBlock="cadetblue"
                  width="305px"
                  height="35px"
                >
                  <InputLeftAddon
                    pointerEvents="none"
                    width="30px"
                    height="35px"
                    border="none"
                    justifyContent="center"
                    children={<FontAwesomeIcon color="black" icon={faCity} />}
                  />
                  <Input
                    type="text"
                    id="country"
                    h="35px"
                    placeholder="Country"
                    variant="filled"
                    width="300px"
                    borderX="none"
                    borderBlockEnd="none"
                    borderBlock="none"
                    pr="5rem"
                  />
                </InputGroup>
              </FormControl>
              <FormControl pb="1em" borderColor="black" isRequired>
                <InputGroup
                  variant="outline"
                  borderRadius="5px"
                  borderBlock="cadetblue"
                  width="305px"
                  height="35px"
                >
                  <InputLeftAddon
                    pointerEvents="none"
                    width="30px"
                    height="35px"
                    border="none"
                    justifyContent="center"
                    children={<FontAwesomeIcon color="black" icon={faCity} />}
                  />
                  <Select name="city">
                    <option>Select Your City</option>
                    <option>Irbid</option>
                    <option>Amman</option>
                    <option>Salt</option>
                    <option>Aqaba</option>
                  </Select>
                </InputGroup>
              </FormControl>
              <Button
                type="submit"
                width="305px"
                color="black"
                height="35px"
                variant="solid"
              >
                {" "}
                Sign up Now
              </Button>
              <Box>
                Already have an account?{" "}
                <Link color="teal.500" href="/signin">
                  Sign in
                </Link>
              </Box>
            </Form>
          </Stack>
        </Stack>
      </Center>
    </Flex>
  );
}



