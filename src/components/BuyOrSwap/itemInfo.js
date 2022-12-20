import { Button, Flex, Heading, VStack, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ItemInfo(props) {

    return (
        props.item &&
        <VStack
        justify={'center'}
            //   opacity='0.9'
            w={'100%'}
            bg={'azure'}
            borderBlock='groove'
            borderBlockStartColor='#e0952e'
            borderBlockEndColor='#e0952e'
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
                fontSize={'5xl'}
                fontFamily='cursive'
                textAlign={'center'}
                mb='10px'
                borderBlockEnd={'inherit'}
                borderTop={'hidden'}
                borderBlockEndColor='#e0952e'

            >
                {props.item.name}
            </Heading>
            <Heading
                fontSize={'2xl'}
            >
                Description:&nbsp; {props.item.description}
            </Heading>

            <Heading
                fontSize={'2xl'}
            >
                Will swap for:&nbsp;{props.item.swapFor}
            </Heading>
            {props.item.sellingPrice > 0 ? (
                <Heading
                    fontSize={'2xl'}
                    // opacity={'0.5'}
                    color='black'
                >
                    Price:&nbsp; {props.item.sellingPrice}</Heading>
            ) : <Heading
                fontSize={'2xl'}
                // opacity={'0.5'}
                color='black'
            >Not for sale</Heading>}
            <Heading
                fontSize={'2xl'}
            // opacity={'0.5'}
            color='black'
            >
                Category: &nbsp;    {props.item.category}
            </Heading>
            <Heading
                fontSize={'2xl'}
                // opacity={'0.5'}
                color='black'
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