import React from "react";
import Form from "react-bootstrap/Form";
import "./addItem.scss";
import "./addItem.css";
import { Flex } from "@chakra-ui/react";
import { Heading, Stack, Text, Center, } from "@chakra-ui/react";
import NavBar from "../NavBar/NavBar";
import { useItem } from "ContextAPI/Context/itemsContext";


function AddItemPage () {
    const { handleAddItem, itemState } = useItem();
    console.log( itemState );
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
                            <Form onSubmit={e => handleAddItem( e )}>
                                <div className="form__group field">
                                    <input type="input" className="form__field" placeholder="Name" name="name" id='name' required />
                                    <label htmlFor="name" className="form__label">Name</label>
                                </div>
                                <div className="form__group field">
                                    <input type="input" className="form__field" placeholder="Description" name="description" id='description' required />
                                    <label htmlFor="description" className="form__label">Description</label>
                                </div>
                                <div className="item">
                                    <div className="zaidcheck">
                                        <input type="checkbox" id="checkbox-rect1" name="sellingStatus" value="sellingStatus" />
                                        <label htmlFor="checkbox-rect1">Selling Status</label>
                                    </div>
                                </div>
                                <div className="form__group field">
                                    <input type="input" className="form__field" placeholder="sellingPrice" name="sellingPrice" id='sellingPrice' required />
                                    <label htmlFor="sellingPrice" className="form__label">Selling Price</label>
                                </div>
                                <div className="form__group field">
                                    <input type="input" className="form__field" placeholder="category" name="category" id='category' required />
                                    <label htmlFor="category" className="form__label">Category</label>
                                </div>
                                <input className="avatar-file" type="file" name="uploadedImages" multiple />
                                <div className="form__group field">
                                    <input type="input" className="form__field" placeholder="swapFor" name="swapFor" id='swapFor' required />
                                    <label htmlFor="swapFor" className="form__label">Swap For</label>
                                </div>
                                <div className="form__group field">
                                    <input type="input" className="form__field" placeholder="countryOfSwap" name="countryOfSwap" id='countryOfSwap' required />
                                    <label htmlFor="countryOfSwap" className="form__label">Country Of Swap</label>
                                </div>
                                <div className="select-dropdown">
                                    <select name="cityOfSwap">
                                        <option value="Amman">Amman</option>
                                        <option value="Irbid">Irbid</option>
                                        <option value="Aqapa">Aqapa</option>
                                        <option value="Zarqa">Zarqa</option>
                                        <option value="Mafraq">Mafraq</option>
                                    </select>
                                </div>
                                <button className="add-btn"
                                    disabled={itemState.loading}
                                >
                                    Add Item
                                </button>
                            </Form>
                        </Stack>
                    </Stack>
                </Center>
            </Flex>
        </>
    );
}
export default AddItemPage;;