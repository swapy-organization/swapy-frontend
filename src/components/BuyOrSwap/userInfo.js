import { Avatar, Button, Heading, HStack, VStack, WrapItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function UserInfo ( props ) {
    return (
        props.user && <HStack
            bg={'#f5f5f5'}
            rounded={'md'}
            w={'100%'}
            p={10}
            h={'100%'}
            overflow={'hidden'}
            justifyContent={'space-between'}
        >
            <HStack
                w={'100%'}
                justifyContent={'space-between'}
                alignItems={'center'}
                p={'1rem'}
            >
                <WrapItem>
                    <Avatar size="lg" name={props.user.username} src={props.user.avatar} />
                </WrapItem>
                <VStack>
                    <Heading
                        fontSize={'xl'}
                        fontWeight={'bold'}
                        color={'#000'}
                        opacity={'0.5'}
                    >
                        {props.user.username}
                    </Heading>
                    <Heading
                        fontSize={'lg'}
                        fontWeight={'bold'}
                        color={'#000'}
                        opacity={'0.5'}
                    >
                        {props.user.city} / {props.user.country}
                    </Heading>
                </VStack>
                <WrapItem>
                    <Link to={`/profile/${props.user.id}`}>
                        <Button
                            colorScheme={'blue'}
                            disabled={localStorage.getItem( 'isAuth' ) === 'false' || !localStorage.getItem( 'isAuth' ) ? true : false}
                        >Show Profile</Button>
                    </Link>
                </WrapItem>
            </HStack>
        </HStack>
    );
}
export default UserInfo;