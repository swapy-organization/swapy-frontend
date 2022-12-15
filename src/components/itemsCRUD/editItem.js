import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserCircle,
    faEnvelope,
    faLock,
    faCity,
} from "@fortawesome/free-solid-svg-icons";
import { Card, CardBody, CardFooter, Divider, Flex, HStack, Image, Spinner } from "@chakra-ui/react";
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
import { useItem } from "ContextAPI/Context/itemsContext";
import { useParams } from "react-router-dom";
import axios from "axios";


function EditItemPage () {
    const { handleEditItem, itemState } = useItem();
    const [ item, setItem ] = useState();
    const { id } = useParams();
    const getItemData = async ( id ) => {
        const item = await axios.get( `${process.env.REACT_APP_BACKEND_LINK}/items/${id}` );
        setItem( item.data );
    };
    console.log( itemState );
    useEffect( () => {
        getItemData( id );
    }, [] );
    return (
        <>
            <NavBar />
            {item ? (
                <HStack
                    spacing='24px'
                    justifyContent='center'
                    alignItems='center'
                    paddingTop={10}
                >
            <Card maxW='sm' key={item.item.id}>
                <CardBody>
                    {item.item.uploadedImages ?
                        <Image
                            src={item.item.uploadedImages[ 0 ]}
                            alt={item.item.name}
                            borderRadius='lg'
                            w='250'
                            h='250'
                        />
                        : null}
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{item.item.name}</Heading>
                        <Heading size='sm'>{item.item.category}</Heading>
                        <Text>
                            {item.item.description}
                        </Text>
                        <Text color='blue.600' fontSize='lg'>
                            Swap For: {item.item.swapFor}
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            {item.item.sellingPrice > 0 ? `Price: ${item.item.sellingPrice}` : 'Not for sale'}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                        <Button variant='solid' colorScheme='blue'>
                            Buy or Swap now
                        </Button>
                </CardFooter>
            </Card>
                <Flex paddingTop={10}>
                    <Center
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
                                Edit Item
                            </Heading>
                            <Text fontSize="lg" color="black">
                                Edit your item details
                            </Text>
                            <Stack justify="center" color="gray">
                                <Form onSubmit={e => handleEditItem( e, id )}>
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
                                                id="name"
                                                h="35px"
                                                variant="filled"
                                                width="300px"
                                                borderX="none"
                                                borderBlockEnd="none"
                                                borderBlock="none"
                                                pr="5rem"
                                                defaultValue={item.item.name}
                                                color="black"
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
                                                id="description"
                                                h="35px"
                                                variant="filled"
                                                width="300px"
                                                borderX="none"
                                                borderBlockEnd="none"
                                                borderBlock="none"
                                                pr="5rem"
                                                defaultValue={item.item.description}
                                                color="black"
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
                                            <input
                                                type="checkbox"
                                                id="sellingStatus"
                                                defaultChecked={item.item.sellingStatus === "true" ? true : false}
                                                color="black"
                                            />
                                            <label htmlFor="sellingStatus" style={
                                                {
                                                    color: "black",
                                                    fontSize: "15px",
                                                    fontWeight: "bold",
                                                    marginLeft: "10px",
                                                }
                                            }>Selling Status</label>
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
                                                children="$"
                                            />
                                            <Input
                                                type="text"
                                                id="sellingPrice"
                                                variant="filled"
                                                h="35px"
                                                width="300px"
                                                borderX="none"
                                                borderBlockEnd="none"
                                                borderBlock="none"
                                                pr="5rem"
                                                defaultValue={item.item.sellingPrice}
                                                color="black"
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
                                                type="text"
                                                defaultValue={item.item.category}
                                                color="black"
                                                h="35px"
                                                id="category"
                                                variant="filled"
                                                width="300px"
                                                borderX="none"
                                                borderBlockEnd="none"
                                                borderBlock="none"
                                                pr="5rem"
                                            />
                                        </InputGroup>
                                    </FormControl>
                                    <input type="file" name="uploadedImages" multiple />
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
                                                type="text"
                                                id="swapFor"
                                                h="35px"
                                                defaultValue={item.item.swapFor}
                                                color="black"
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
                                                id="countryOfSwap"
                                                h="35px"
                                                defaultValue={item.item.countryOfSwap}
                                                color="black"
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
                                            <Select name="cityOfSwap" defaultValue={item.item.cityOfSwap}>
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
                                    > Edit Item
                                    </Button>
                                </Form>
                            </Stack>
                        </Stack>
                    </Center>
                </Flex>
                </HStack>
            )
                : (
                    <Flex
                        w="100%"
                        h="100vh"
                        bg="white"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Spinner
                            thickness="4px"
                            speed="0.65s"
                            emptyColor="gray.200"
                            color="purple.500"
                            size="xl"
                        />
                    </Flex>
                )
            }
        </>
    );
};

export default EditItemPage;;