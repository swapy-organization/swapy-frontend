import React, { useState } from 'react';
import SignUpInfo from './SignUpInfo';
import OtherInfo from './OtherInfo';
import PersonalInfo from './PersonalInfo';
import { Button, Center, Flex, Heading, Text, Stack, Box } from '@chakra-ui/react'

function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({

        email: "",
        password: "",
        confirmPassword: "",
        username: "",
        firstname: "",
        lastname: "",
        country: "",
        city: "",
        avatar: ""
    })
    // console.log(formData)
    const FormTitles = ["Sign Up", "Personal Info", "Other Info"];
localStorage.setItem("formData",JSON.stringify(formData));
    const PageDisplay = () => {
        if (page === 0) {
            return <SignUpInfo formData={formData} setFormData={setFormData} />
        } else if (page === 1) {
            return <PersonalInfo formData={formData} setFormData={setFormData} />
        } else {
            return <OtherInfo formData={formData} setFormData={setFormData} />
        }
    }

    return (

        <Flex h='50px' >
            <Center
                h="100vh"
                w="100%"
                bg={"url(" + require("assets/img/antoine-barres.jpg") + ")"}
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
                    rounFded="md"
                >
                    <Heading as='h1' textAlign='center' >
                        {FormTitles[page]}
                    </Heading>
                    <Text fontSize="lg" color="black">
                        You like swapping? Join Us
                    </Text>
                    <Stack>{PageDisplay()}</Stack>
                    <Flex>

                        <Button
                            disabled={page === 0}
                            onClick={() => {
                                setPage((currPage) => currPage - 1);
                            }}
                        >
                            Prev
                        </Button>
                        <Button
                            onClick={() => {
                                if (page === FormTitles.length - 1) {
                                    alert("FORM SUBMITTED");
                                    console.log(formData);
                                } else {
                                    setPage((currPage) => currPage + 1);
                                }
                            }}
                            
                        >
                            {page === FormTitles.length - 1 ? "Submit" : "Next"}
                        </Button>
                    </Flex>
                </Stack>

            </Center>

        </Flex>
      
    );
}

export default Form;