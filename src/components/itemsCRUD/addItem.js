import React from "react";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserCircle,
    faEnvelope,
    faLock,
    faCity,
} from "@fortawesome/free-solid-svg-icons";
import { Flex } from "@chakra-ui/react";
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


function AddItemPage () {
    const {handleAddItem, itemState}= useItem()
    console.log(itemState)
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
                            <Form onSubmit={e => handleAddItem(e)}>
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
                                            placeholder="ITEM NAME"
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
                                            placeholder="ITEM DESCRIPTION"
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
                                            placeholder="Selling Status"
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
                                            placeholder="Selling Price"
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
                                            placeholder="Category"
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
                                            placeholder="Swap For"
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
                                            placeholder="Country Of Swap"
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
                                        <Select name="cityOfSwap">
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
                                    disabled={itemState.isLoading}
                                > Add Item
                                </Button>
                            </Form>
                        </Stack>
                    </Stack>
                </Center>
            </Flex>
        </>
    );
}
export default AddItemPage;;