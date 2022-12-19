import React, { useState } from 'react';
import SignUpInfo from './SignUpInfo';
import OtherInfo from './OtherInfo';
import PersonalInfo from './PersonalInfo';
import { Button, Center, Flex, Heading, Text, Stack, Box } from '@chakra-ui/react';
import { useAuth } from "../../../ContextAPI/Context/authContext";
import { Link } from 'react-router-dom';

function Form () {
    const { handleSignUp } = useAuth();
    const [ bol, setBol ] = useState( false );

    const [ page, setPage ] = useState( 0 );
    const [ formData, setFormData ] = useState( {

        email: "",
        password: "",
        username: "",
        firstname: "",
        lastname: "",
        country: "",
        city: "",
        avatar: ""
    } );
    const FormTitles = [ "Sign Up", "Personal Info", "Other Info" ];
    localStorage.setItem( "formData", JSON.stringify( formData ) );
    const PageDisplay = () => {
        if ( page === 0 ) {
            return <SignUpInfo formData={formData} setFormData={setFormData} handlePassword={bole => setBol( bole )} />;
        } else if ( page === 1 ) {
            return <PersonalInfo formData={formData} setFormData={setFormData} />;
        } else {
            return <OtherInfo formData={formData} setFormData={setFormData} />;
        }
    };

    return (

        <Flex h='50px' >
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
                    {/* <Box color='red' height='10px'  width= {page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%" } ></Box> */}
                    <Heading as='h1' textAlign='center' >
                        {FormTitles[ page ]}
                    </Heading>
                    <Text fontSize="lg" color="black">
                        You like swapping? Join Us
                    </Text>
                    <Stack>{PageDisplay()}</Stack>
                    <Flex>
                        <Button
                            disabled={page === 0}
                            onClick={() => {
                                setPage( ( currPage ) => currPage - 1 );
                            }}
                            hidden={page === 0 }
                        >
                            Prev
                        </Button>
                        <Button
                            disabled={!bol}
                            onClick={() => {
                                if ( page === FormTitles.length - 1 ) {
                                    handleSignUp( formData );
                                } else {
                                    setPage( ( currPage ) => currPage + 1 );
                                }
                            }}
                            colorScheme= {page === FormTitles.length - 1 ? "blue" : null}
                        >
                            {page === FormTitles.length - 1 ? "Submit" : "Next"}
                        </Button>
                    </Flex>
                        <Box>
                            Already have an account?{" "}
                            <Link color="teal.500" to="/signin">
                                Sign in
                            </Link>
                        </Box>
                </Stack>
            </Center>
        </Flex>
    );
}

export default Form;