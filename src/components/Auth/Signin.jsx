import React, { useState } from "react";
import { Flex, Heading, Input, Button, InputGroup, Stack, InputLeftElement, Center } from "@chakra-ui/react";
import { chakra, Box, FormControl, FormHelperText, InputRightElement } from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useAuth } from "../../ContextAPI/Context/authContext";
import { Link } from "react-router-dom";
const CFaUserAlt = chakra( FaUserAlt );
const CFaLock = chakra( FaLock );


const Signin = () => {

  const [ showPassword, setShowPassword ] = useState( false );
  const handleShowClick = () => setShowPassword( !showPassword );
  const { handleLogin } = useAuth();


  return (

    <Flex h="50px">
      <Center
        h="100vh"
        w="100%"
        bg={"url(" + require( "assets/img/antoine-barres.jpg" ) + ")"}
        width="100%"
        bgSize="cover"
        repeat="no-repeat"
        overflow="hidden"
      >
        <Stack
          opacity="0.7"
          boxShadow="md"
          alignItems="center"
          bg={"#fdf9ff"}
          p="20"
          rounded="md"

        >
          <Heading as='h1' textAlign='center' >
            Welcome Back
          </Heading>
          <form onSubmit={e => handleLogin( e )}>
            <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="md">
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="black.300" />}
                  />
                  <Input
                    id='username'
                    placeholder="Username"
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaLock color="black.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link 
                  to={'/about-us'} 
                  onClick={
                    () => {
                      setTimeout( () => {
                      window.scrollTo( 0, 2180 );
                      }, 2000 );
                  }}
                  >forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant={"outline"}
                colorScheme="black"
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
          <Box
          >
            Don't have an account?{" "}
            <Link
              color="teal.200"
              to="/signup"
            >
              Sign Up!
            </Link>
          </Box>
        </Stack>
      </Center>
    </Flex>
  );
};
export default Signin;


