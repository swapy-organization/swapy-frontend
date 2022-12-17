import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  HStack,
  Image,
  Spinner,
} from "@chakra-ui/react";
import "./addItem.scss"
import './addItem.css'
import { Heading, Stack, Button, Text, Center } from "@chakra-ui/react";
import NavBar from "../NavBar/NavBar";
import { useItem } from "ContextAPI/Context/itemsContext";
import { useParams } from "react-router-dom";
import axios from "axios";

function EditItemPage() {
  const { handleEditItem, itemState } = useItem();
  const [item, setItem] = useState();
  const { id } = useParams();
  const getItemData = async (id) => {
    const item = await axios.get(
      `${process.env.REACT_APP_BACKEND_LINK}/items/${id}`
    );
    setItem(item.data);
  };
  console.log(itemState);
  useEffect(() => {
    getItemData(id);
  }, []);
  return (
    <>
      <NavBar />
      {item ? (
        <HStack
          spacing="24px"
          justifyContent="center"
          alignItems="center"
          paddingTop={10}
        >
          <Card maxW="sm" key={item.item.id}>
            <CardBody>
              {item.item.uploadedImages ? (
                <Image
                  src={item.item.uploadedImages[0]}
                  alt={item.item.name}
                  borderRadius="lg"
                  w="250"
                  h="250"
                />
              ) : null}
              <Stack mt="6" spacing="3">
                <Heading size="md">{item.item.name}</Heading>
                <Heading size="sm">{item.item.category}</Heading>
                <Text>{item.item.description}</Text>
                <Text color="blue.600" fontSize="lg">
                  Swap For: {item.item.swapFor}
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  {item.item.sellingPrice > 0
                    ? `Price: ${item.item.sellingPrice}`
                    : "Not for sale"}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Button variant="solid" colorScheme="blue">
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
                <form onSubmit={e => handleEditItem(e)} >
                            <div class="form__group field-1">
                                <input defaultValue={item.item.name} type="input" class="form__field-1" placeholder="Name"  id='name' required />
                                <label for="name" class="form__label">Name</label>
                                </div>

                                <div class="form__group field-1">
                                <input defaultValue={item.item.description} type="input" class="form__field-1" placeholder="Description" id='description' required />
                                <label for="description" class="form__label">Description</label>
                                </div>
                               
                                
                                <div class="item">
                                <div class="checkbox-rect">
                                    <input defaultChecked={item.item.sellingStatus === "true" ? true : false} type="checkbox" id="checkbox-rect1"  value="sellingStatus" />
                                    <label for="checkbox-rect1">Selling Status</label>
                                </div>
                                </div>

                                <div class="form__group field-1">
                                <input defaultValue={item.item.sellingPrice} type="input" class="form__field-1" placeholder="sellingPrice"  id='sellingPrice' required />
                                <label for="sellingPrice" class="form__label">Selling Price</label>
                                </div>
                               
                                <div class="form__group field-1">
                                <input defaultValue={item.item.category} type="input" class="form__field-1" placeholder="category"  id='category' required />
                                <label for="category" class="form__label">Category</label>
                                </div>



                               
                               <div class="form__group field-1">
                                <input defaultValue={item.item.swapFor} type="input" class="form__field-1" placeholder="swapFor"  id='swapFor' required />
                                <label for="swapFor" class="form__label">Swap For</label>
                                </div>

                                <div class="form__group field-1">
                                <input defaultValue={item.item.countryOfSwap} type="input" class="form__field-1" placeholder="countryOfSwap"  id='countryOfSwap' required />
                                <label for="countryOfSwap" class="form__label">Country Of Swap</label>
                                </div>
                                <input class="avatar-file" type="file" name="uploadedImages" multiple />


                                <div class="page-1">
                                    <div class="select-dropdown-1">
                                        <select name="cityOfSwap">
                                        <option value="Amman">Amman</option>
                                        <option value="Irbid">Irbid</option>
                                        <option value="Aqapa">Aqapa</option>
                                        <option value="Zarqa">Zarqa</option>
                                        <option value="Mafraq">Mafraq</option>
                                        </select>
                                    </div>
                                    </div>
  
                                <button class="add-btn"
                                disabled={itemState.loading}
                                >
                                    Edit Item
                                </button>
                                
                            </form>
                </Stack>
              </Stack>
            </Center>
          </Flex>
        </HStack>
      ) : (
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
      )}
    </>
  );
}

export default EditItemPage;
