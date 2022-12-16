import { Button, Flex, Heading, VStack } from "@chakra-ui/react";

function ItemInfo ( props ) {

    return (
        props.item && <VStack>
            <Heading
                fontSize={'5xl'}
                fontWeight={'bold'}
            >
                {props.item.name}
            </Heading>
            <Heading
                fontSize={'3xl'}
            >
            <Flex
                fontSize={'2xl'}
                fontWeight={'bold'}
                color={'#000'}
                opacity={'0.5'}
                display={'inline'}
            >
                Description: </Flex>
                {props.item.description}
            </Heading>
            <Heading
                fontSize={'3xl'}
            >
                <Flex
                    fontWeight={'bold'}
                    color={'#000'}
                    opacity={'0.5'}
                    display={'inline'}
                    fontSize={'2xl'}
                >Will swap for: </Flex>{props.item.swapFor}
            </Heading>
            {props.item.sellingPrice > 0 ? (
                <Heading
                    fontSize={'3xl'}
                    fontWeight={'bold'}
                    color={'#000'}
                    opacity={'0.5'}
                >Price: {props.item.sellingPrice}</Heading>
            ) : <Heading
                fontSize={'3xl'}
                fontWeight={'bold'}
                color={'#000'}
                opacity={'0.5'}
            >Not for sale</Heading>}
            <Heading
                fontSize={'3xl'}
            >
                <Flex
                    fontSize={'2xl'}
                    fontWeight={'bold'}
                    color={'#000'}
                    opacity={'0.5'}
                    display={'inline'}
                >
                    Category: </Flex>
                {props.item.category}
            </Heading>
            <Heading
                fontSize={'2xl'}
                fontWeight={'bold'}
                color={'#000'}
            >
                {props.item.cityOfSwap} / {props.item.countryOfSwap}
            </Heading>
            <Button 
            colorScheme={'blue'} 
            disabled={localStorage.getItem('isAuth') === 'false' || !localStorage.getItem('isAuth') ? true : false}
            >Send message</Button>
        </VStack>
    );
}

export default ItemInfo;