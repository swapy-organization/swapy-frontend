
import { Button, Divider, Heading, HStack, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";


function PageNotFound () {
    return (
        <>
            <NavBar />
            <VStack 
            h={'92vh'} 
            paddingTop={'10rem'}
            justifyContent={'center'}
            alignItems={'center'}
            bg={'#f5f5f5'}
            rounded={'md'}
            >
                <Heading
                    fontSize={'5xl'}
                    fontWeight={'bold'}
                >
                    404 Page Not Found
                </Heading>
                <Divider
                    w={'100%'}
                    h={'100px'}
                    alignSelf={'center'}
                />
                <HStack>
                    <Link to={-1}>
                        <Button
                            colorScheme={'blue'}
                        >
                            Go Back
                        </Button>
                    </Link>
                    <Link to="/">
                        <Button
                            colorScheme={'blue'}
                        >
                            Go Home
                        </Button>
                    </Link>
                </HStack>
            </VStack>
            <Footer />
        </>
    );
}

export default PageNotFound;