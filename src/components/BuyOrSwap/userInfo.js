import { Avatar, Button, Heading, HStack, Stack, VStack, WrapItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function UserInfo(props) {
    return (


        props.user && <Stack
            opacity='0.7'
            w={'100%'}
            bg={'azure'}
          borderBlock='groove'
            rounded={'md'}
            padding='1px'
            justifyContent='space-between'
            h={'70%'}
            overflow={'hidden'}
        >

            <HStack
                // w={'80%'}
                alignItems={'center'}
                p={'1rem'}
            >
                <HStack justifyItems='left'>
                    <WrapItem   >
                        <Avatar size="lg" name={props.user.username} src={props.user.avatar} />
                    </WrapItem>
                    <Heading
                        fontSize={'xl'}
                        fontWeight={'bold'}
                        textColor={'black'}

                    >
                        {props.user.username}
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                    </Heading>
                </HStack>

                <Heading
                    fontSize={'xl'}
                    fontWeight={'bold'}
                    textColor={'black'}
                    
                >
                    {props.user.city} / {props.user.country}
                </Heading>

            </HStack>
            <HStack
                justifyContent={'center'}
                pb='10px'
            >
                <WrapItem>
                    {console.log(props.user)}
                    <Link to={`/profile/${props.user.id}`}>
                        <Button
                            colorScheme={'blue'}
                            disabled={localStorage.getItem('isAuth') === 'false' || !localStorage.getItem('isAuth') ? true : false}
                        >Show Profile</Button>
                    </Link>
                </WrapItem>
            </HStack>

        </Stack>

    );
}
export default UserInfo;