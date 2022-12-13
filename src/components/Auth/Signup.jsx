import React from "react";
import Form from "react-bootstrap/Form";
import { Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faUser,
  faEnvelope,
  faLock,
  faUserTie,
  faCity,
} from "@fortawesome/free-solid-svg-icons";
import { Flex, Spinner,Box } from "@chakra-ui/react";
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
} from "@chakra-ui/react";

import { useAuth } from "../../ContextAPI/Context/authContext";

export default function SignupCard() {
  // const [ showPassword, setShowPassword ] = useState( false );
  const { handleSignUp, showSpinner } = useAuth();

  return (
    <Flex h="50px">
      <Center
        h="120vh"
        w="100%"
        bg={"url(https://wallpaperaccess.com/full/193861.jpg)"}
        width="100%"
      >
        <Stack
          opacity="0.7"
          boxShadow="md"
          alignItems="center"
          bg={"#fdf9ff"}
          p="20"
          rounded="md"
        >
          <Heading as="h1" color="black">
            SIGN UP NOW{" "}
          </Heading>
          <Text fontSize="lg" color="black">
            You like swapping? Join Us
          </Text>
          <Stack justify="center" color="gray">
            <Form onSubmit={handleSignUp}>
              <FormControl pb="1em" borderColor="black" isRequired>
                <InputGroup
                  variant="outline"
                  borderRadius="5px"
                  borderBlock="cadetblue"
                  bg="#e8f0fe"
                  width="305px"
                  height="30px"
                >
                  <InputLeftAddon
                    pointerEvents="none"
                    width="30px"
                    height="30px"
                    border="none"
                    justifyContent="center"
                    children={
                      <FontAwesomeIcon color="black" icon={faUserCircle} />
                    }
                  />
                  <Input
                    type="text"
                    id="username"
                    h="25px"
                    variant="filled"
                    width="300px"
                    borderX="none"
                    borderBlockEnd="none"
                    borderBlock="none"
                    pr="5rem"
                    placeholder="USERNAME"
                  />
                </InputGroup>
              </FormControl>
              <FormControl pb="1em" borderColor="black" isRequired>
                <InputGroup
                  variant="outline"
                  borderRadius="5px"
                  borderBlock="cadetblue"
                  bg="#e8f0fe"
                  width="305px"
                  height="30px"
                >
                  <InputLeftAddon
                    pointerEvents="none"
                    width="30px"
                    height="30px"
                    border="none"
                    justifyContent="center"
                    children={
                      <FontAwesomeIcon color="black" icon={faUserCircle} />
                    }
                  />
                  <Input
                    type="text"
                    id="firstname"
                    h="25px"
                    variant="filled"
                    width="300px"
                    borderX="none"
                    borderBlockEnd="none"
                    borderBlock="none"
                    pr="5rem"
                    placeholder="First Name"
                  />
                </InputGroup>
              </FormControl>
              <FormControl pb="1em" borderColor="black" isRequired>
                <InputGroup
                  variant="outline"
                  borderRadius="5px"
                  borderBlock="cadetblue"
                  bg="#e8f0fe"
                  width="305px"
                  height="30px"
                >
                  <InputLeftAddon
                    pointerEvents="none"
                    width="30px"
                    height="30px"
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
                    h="25px"
                    width="300px"
                    borderX="none"
                    borderBlockEnd="none"
                    borderBlock="none"
                    pr="5rem"
                    placeholder="Last Name"
                  />
                </InputGroup>
              </FormControl>

              <FormControl pb="1em" borderColor="black" isRequired>
                <InputGroup
                  variant="outline"
                  borderRadius="5px"
                  h="25px"
                  borderBlock="cadetblue"
                  bg="#e8f0fe"
                  width="305px"
                  height="30px"
                >
                  <InputLeftAddon
                    pointerEvents="none"
                    width="30px"
                    height="30px"
                    border="none"
                    justifyContent="center"
                    children={
                      <FontAwesomeIcon color="black" icon={faEnvelope} />
                    }
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    h="25px"
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
                  bg="#e8f0fe"
                  width="305px"
                  height="30px"
                >
                  <InputLeftAddon
                    pointerEvents="none"
                    width="30px"
                    height="30px"
                    border="none"
                    justifyContent="center"
                    children={
                      <FontAwesomeIcon color="black" icon={faUserTie} />
                    }
                  />
                  <Input
                    type="file"
                    placeholder="Avatar"
                    h="25px"
                    id="avatar"
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
                  bg="#e8f0fe"
                  width="305px"
                  height="30px"
                >
                  <InputLeftAddon
                    pointerEvents="none"
                    width="30px"
                    height="30px"
                    border="none"
                    justifyContent="center"
                    children={<FontAwesomeIcon color="black" icon={faLock} />}
                  />
                  <Input
                    type="password"
                    id="password"
                    h="25px"
                    placeholder="********"
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
                  bg="#e8f0fe"
                  width="305px"
                  height="30px"
                >
                  <InputLeftAddon
                    pointerEvents="none"
                    width="30px"
                    height="30px"
                    border="none"
                    justifyContent="center"
                    children={<FontAwesomeIcon color="black" icon={faLock} />}
                  />
                  <Input
                    type="password"
                    id="confirmPassword"
                    h="25px"
                    placeholder="********"
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
                  bg="#e8f0fe"
                  width="305px"
                  height="30px"
                >
                  <InputLeftAddon
                    pointerEvents="none"
                    width="30px"
                    height="30px"
                    border="none"
                    justifyContent="center"
                    children={<FontAwesomeIcon color="black" icon={faCity} />}
                  />
                  <Input
                    type="text"
                    id="country"
                    h="25px"
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
                  bg="#e8f0fe"
                  width="305px"
                  height="30px"
                >
                  <InputLeftAddon
                    pointerEvents="none"
                    width="30px"
                    height="30px"
                    border="none"
                    justifyContent="center"
                    children={<FontAwesomeIcon color="black" icon={faCity} />}
                  />
                  <Select name="city">
                    <option>Select Your City</option>
                    <option>Irbid</option>
                    <option>Amman</option>
                    <option>Salt</option>
                    <option>Ma'an</option>
                    <option>Petra</option>
                    <option>Aqapa</option>
                    <option>Jerash</option>
                    <option>Ajloun</option>
                    <option>Zarqa'a</option>
                    <option>Mafraq</option>
                    <option>Karak</option>
                    <option>Tafilah</option>
                  </Select>
                </InputGroup>
              </FormControl>
              <Button
                type="submit"
                width="305px"
                color="black"
                height="30px"
                bg="#d0b4fb"
                borderX="none"
                borderY="none"
                boxShadow="0 0 0 3px var(--chakra-colors-purple)"
                variant="solid"
              >
                <FontAwesomeIcon icon={<FontAwesomeIcon icon={faUser} />} />{" "}
                &nbsp; Sign up Now
                {showSpinner ? (
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                  />
                ) : null}
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
