import { Button, Flex, Heading, VStack, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ItemInfo(props) {

    return (
        props.item &&
        <VStack
            alignItems={'left'}
            //   opacity='0.9'
            w={'100%'}
            bg={'azure'}
            borderBlock='groove'
            rounded={'md'}
            padding='1px'
            justifyContent='space-between'
            h={'70%'}
            overflow={'hidden'}
            p='1em'
            fontSize={'medium'}
            fontStyle={'italic'}
        >
            <Heading
                fontSize={'4xl'}
                fontFamily='cursive'
                textAlign={'center'}
                mb='10px'
                borderBlockEnd={'inherit'}
                 borderTop={'hidden'}
                 
            >
                {props.item.name}
            </Heading>
            <Heading
                fontSize={'2xl'}
                opacity={'0.5'}
            >
                <Flex
                    // fontSize={'2xl'}
                    // fontWeight={'bold'}
                    color={'#000'}
                    display={'inline'}
                >
                </Flex>
                Description:{props.item.description}
            </Heading>
            <Heading
                fontSize={'2xl'}
                opacity={'0.5'}
            >
                <Flex
                    fontWeight={'bold'}
                    color={'#000'}
                    display={'inline'}
                    fontSize={'2xl'}
                >Will swap for: </Flex>{props.item.swapFor}
            </Heading>
            {props.item.sellingPrice > 0 ? (
                <Heading
                    fontSize={'2xl'}
                    opacity={'0.5'}
                    color={'#000'}
                >
                    Price: {props.item.sellingPrice}</Heading>
            ) : <Heading
                fontSize={'2xl'}
                opacity={'0.5'}
                color={'#000'}
            >Not for sale</Heading>}
            <Heading
                fontSize={'2xl'}
                opacity={'0.5'}
            >
                <Flex
                    fontSize={'2xl'}
                    fontWeight={'bold'}
                    color={'#000'}
                    display={'inline'}
                >
                    Category: </Flex>
                {props.item.category}
            </Heading>
            <Heading
                fontSize={'2xl'}
                opacity={'0.5'}
                color={'#000'}
            >
                {props.item.cityOfSwap} / {props.item.countryOfSwap}
            </Heading>

            <HStack
                justify={'center'}
            >
                {props.item.user &&
                    <Link to={`/message/${props.item.user.id}`}>
                        <Button
                            colorScheme={'blue'}
                            opacity='0.9'

                            disabled={localStorage.getItem('isAuth') === 'false' || !localStorage.getItem('isAuth') ? true : false}
                        >Send message</Button>
                    </Link>
                }
            </HStack>
        </VStack>
    );
}

export default ItemInfo;