import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faLock,
} from "@fortawesome/free-solid-svg-icons";


import {
    Input,
    FormControl,
    InputLeftAddon,
    InputGroup
} from "@chakra-ui/react";
function SignUpInfo ( { formData, setFormData, handlePassword } ) {
    const [ passwordError, setPasswordError ] = React.useState( false );
    const checkPassword = ( e ) => {
        if ( e.target.value !== formData.password ) {
            setPasswordError( true );
            
        } else {
            setPasswordError( false );
            
        }
        handlePassword(passwordError)
    };
    return (
        <>
            <FormControl pb="1em" borderColor="black" isRequired={true}>
                <InputGroup
                    variant="outline"
                    height="35px"
                    borderRadius="5px"
                    borderBlock="cadetblue"
                    bg="#e8f0fe"
                    width="305px"
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
                        type="email"
                        placeholder="Please enter your email"
                        _placeholder={{
                            color: "black",
                            fontSize: "14px",
                            fontWeight: "normal",
                        }}
                        id="email"
                        h="35px"
                        variant="filled"
                        width="300px"
                        borderX="none"
                        borderBlockEnd="none"
                        borderBlock="none"
                        value={formData.email}
                        onChange={( event ) =>
                            setFormData( { ...formData, email: event.target.value } )
                        }
                    />
                </InputGroup>
            </FormControl>

            <FormControl pb="1em" borderColor="black" isRequired={true}>
                <InputGroup
                    variant="outline"
                    height="35px"
                    borderRadius="5px"
                    borderBlock="cadetblue"
                    bg="#e8f0fe"
                    width="305px"
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
                        type="password"
                        id="password"
                        placeholder="enter your password"
                        _placeholder={{
                            color: "black",
                            fontSize: "14px",
                            fontWeight: "normal",
                        }}
                        h="35px"
                        variant="filled"
                        width="300px"
                        borderX="none"
                        borderBlockEnd="none"
                        borderBlock="none"
                        value={formData.password}
                        onChange={( event ) =>
                            setFormData( { ...formData, password: event.target.value } )
                        }
                    />
                </InputGroup>
            </FormControl>

            <FormControl pb="1em" borderColor="black" isRequired={true}>
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
                        type="password"
                        id="confirmPassword"
                        h="35px"
                        placeholder="confirm your password"
                        _placeholder={{
                            color: "black",
                            fontSize: "14px",
                            fontWeight: "normal",
                        }}
                        variant="filled"
                        width="300px"
                        borderX="none"
                        borderBlockEnd="none"
                        borderBlock="none"
                        onChange={( event ) => {
                            checkPassword( event );
                        }}
                    />
                </InputGroup>
            </FormControl>
        </>


    );
}

export default SignUpInfo;