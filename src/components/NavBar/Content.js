import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Grid, GridItem, Heading, Image, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
const Content = () => {
  const [ items, setItems ] = useState( [] );
  const getItems = async () => {
    const items = await axios.get( `${process.env.REACT_APP_BACKEND_LINK}/items` );
    setItems( items.data.items );
  };
  React.useEffect( () => {
    getItems();
  }, [] );

  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
      {
        items.length > 0 ? items.map( ( item, i ) => {
          return (
            <GridItem key={i} w='100%' >
            <Card maxW='sm' key={i}>
              <CardBody>
                {item.uploadedImages ?
                  <Image
                    src={item.uploadedImages[ 0 ]}
                    alt={item.name}
                    borderRadius='lg'
                    w='250'
                    h='250'
                  />
                  : null}
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>{item.name}</Heading>
                  <Heading size='sm'>{item.category}</Heading>
                  <Text color='gray.500' fontSize='sm'>
                    listed by: {item.user.username}
                  </Text>
                  <Text>
                    {item.description}
                  </Text>
                  <Text color='blue.600' fontSize='lg'>
                    Swap For: {item.swapFor}
                  </Text>
                  <Text color='blue.600' fontSize='2xl'>
                    {item.sellingPrice > 0 ? `Price: ${item.sellingPrice}` : 'Not for sale'}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button variant='solid' colorScheme='blue'>
                    Buy or Swap now
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            </GridItem>
          );
        } ) : <>no items</>
      }
    </Grid>
  );
};

export default Content;

