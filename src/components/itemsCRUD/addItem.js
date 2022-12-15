import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faEnvelope,
  faLock,
  faCity,
} from "@fortawesome/free-solid-svg-icons";
import { Flex,Box } from "@chakra-ui/react";
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
import NavBar from "../NavBar/NavBar";

function AddItemPage () {
    const [files, setFiles] = useState([]);

    const handleFileChange = (e) => {
        setFiles(e.target.files);
    };

    const handleFilesPreview = () => {
        const filesPreview = Array.from(files).map((file,idx) => (
            <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                width="100"
                height="100"
                key={idx}
                onClick={() => {
                    setFiles([...files].filter((f) => f.name !== file.name));

                }}
            />
        ));
        return filesPreview;
    };
    return (
        <>
            <NavBar />
                <Flex h="50px">
                    <Center
                        h="90vh"
                        marginTop={20}
                        width="100%"
                        bgSize="cover"
                        repeat="no-repeat"
                        overflowY="hidden"
                    >
                        <Stack
                            opacity="0.9"
                            boxShadow="md"
                            alignItems="center"
                            bg={"#fdf9ff"}
                            p="20"
                            rounded="md"
                        >
                            <Heading as="h1" color="black">
                                Add item you choose to swap
                            </Heading>
                            <Text fontSize="lg" color="black">
                                You like swapping? Join Us now
                            </Text>
                            <Stack justify="center" color="gray">
                                <Form onSubmit={e => e.preventDefault()}>
                                    <FormControl pb="1em" borderColor="black" isRequired>
                                        <InputGroup
                                            variant="outline"
                                            borderRadius="5px"
                                            borderBlock="cadetblue"
                                            bg="#e8f0fe"
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
                                    </FormControl>
                                    <FormControl pb="1em" borderColor="black" isRequired>
                                        <InputGroup
                                            variant="outline"
                                            borderRadius="5px"
                                            borderBlock="cadetblue"
                                            bg="#e8f0fe"
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

                                    <FormControl pb="1em" borderColor="black" isRequired>
                                        <InputGroup
                                            variant="outline"
                                            borderRadius="5px"
                                            h="35px"
                                            borderBlock="cadetblue"
                                            bg="#e8f0fe"
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
                                    <input type="file" name="avatar" multiple onChange={e => handleFileChange(e)}/>
                                    {files.length > 0 && (
                                        handleFilesPreview()
                                    )}
                                    <FormControl pb="1em" borderColor="black" isRequired>
                                        <InputGroup
                                            variant="outline"
                                            borderRadius="5px"
                                            borderBlock="cadetblue"
                                            bg="#e8f0fe"
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
                                            bg="#e8f0fe"
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
                                        height="35px"
                                        bg="#d0b4fb"
                                        borderX="none"
                                        borderY="none"
                                        boxShadow="0 0 0 3px var(--chakra-colors-purple)"
                                        variant="solid"
                                    > Sign up Now
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
            </>
        );
    }
            export default AddItemPage;;