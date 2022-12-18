import React from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react";
import {
  Heading,
  Stack,
  FormControl,
  Text,
  Center,
  Select,
  Avatar,
  Button
} from "@chakra-ui/react";
import './form.css';
import './form.scss';
import { useAuth } from "../../ContextAPI/Context/authContext";

export default function SignupCard () {
  const { handleSignUp } = useAuth();
  return (
    <Flex h="50px">
      <Center
        h="100vh"
        w="100%"
        bgGradient={"linear(to-r, #434242, #222222)"}
        width="100%"
        bgSize="cover"
        repeat="no-repeat"
        overflow="hidden"
      >
        <Stack
          opacity="0.9"
          boxShadow="md"
          alignItems="center"
          h="90%"
          w="50%"
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
            <Form onSubmit={( e ) => handleSignUp( e )}>
              <FormControl pb="1em" borderColor="black" isRequired>
                <input type="file" name="avatar" />
              </FormControl>
              <div className="form__group field">
                <input type="input" className="form__field" placeholder="username" id='username' required />
                <label htmlFor="username" className="form__label">Username</label>
              </div>
              <div className="form__group field">
                <input type="input" className="form__field" placeholder="firstname" id='firstname' required />
                <label htmlFor="firstname" className="form__label">First Name</label>
              </div>
              <div className="form__group field">
                <input type="input" className="form__field" placeholder="lastname" id='lastname' required />
                <label htmlFor="lastname" className="form__label">Last Name</label>
              </div>
              <div className="form__group field">
                <input type="input" className="form__field" placeholder="email" id='email' required />
                <label htmlFor="email" className="form__label">Email</label>
              </div>
              <div className="form__group field">
                <input type="input" className="form__field" placeholder="password" id='password' required />
                <label htmlFor="password" className="form__label">Password</label>
              </div>
              <div className="form__group field">
                <input type="input" className="form__field" placeholder="confirmPassword" id='confirmPassword' required />
                <label htmlFor="confirmPassword" className="form__label">Password again</label>
              </div>
              <div className="form__group field">
                <input type="input" className="form__field" placeholder="country" id='country' required />
                <label htmlFor="country" className="form__label">Country</label>
              </div>
              <Select
                placeholder="Select your city"
                borderColor="black"
                isRequired
                id="city"
              >
                <option value="Amman">Amman</option>
                <option value="Aqaba">Aqaba</option>
                <option value="Irbid">Irbid</option>
                <option value="Salt">Salt</option>
              </Select>
              <Button
                left={310}
                bottom={10}
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="blackAlpha"
                width="150px"
              >
                Register now
              </Button>
              <Box>
                Already have an account?{" "}
                <Link color="teal.500" to="/signin">
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



