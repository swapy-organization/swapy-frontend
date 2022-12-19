import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserCircle
} from "@fortawesome/free-solid-svg-icons";


import {
    Input,
    FormControl,
    InputLeftAddon,
    InputGroup

} from "@chakra-ui/react";
function PersonalInfo ( { formData, setFormData } ) {
    console.log( formData );
    return (
        <>
            <FormControl pb="1em" borderColor="black" isRequired>
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
                            <FontAwesomeIcon color="black" icon={faUserCircle} />
                        }
                    />
                    <Input
                        type="text"
                        id="username"
                        h="35px"
                        variant="filled"
                        width="300px"
                        borderX="none"
                        borderBlockEnd="none"
                        borderBlock="none"
                        placeholder="USERNAME"
                        _placeholder={{
                            color: "black",
                            fontSize: "14px",
                            fontWeight: "normal",
                        }}
                        value={formData.username}
                        onChange={( e ) => {
                            setFormData( { ...formData, username: e.target.value } );
                        }}
                    />
                </InputGroup>
            </FormControl>

            <FormControl pb="1em" borderColor="black" isRequired>
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
                        children={
                            <FontAwesomeIcon color="black" icon={faUserCircle} />
                        }
                    />
                    <Input
                        type="text"
                        id="firstname"
                        h="35px"
                        variant="filled"
                        width="300px"
                        borderX="none"
                        borderBlockEnd="none"
                        borderBlock="none"
                        placeholder="First Name"
                        _placeholder={{
                            color: "black",
                            fontSize: "14px",
                            fontWeight: "normal",
                        }}
                        value={formData.firstname}
                        onChange={( e ) => {
                            setFormData( { ...formData, firstname: e.target.value } );
                        }}
                    />
                </InputGroup>
            </FormControl>
            <FormControl pb="1em" borderColor="black" isRequired>
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
                        children={
                            <FontAwesomeIcon color="black" icon={faUserCircle} />
                        }
                    />
                    <Input
                        type="text"
                        id="lastname"
                        variant="filled"
                        h="35px"
                        width="300px"
                        borderX="none"
                        borderBlockEnd="none"
                        borderBlock="none"
                        placeholder="Last Name"
                        _placeholder={{
                            color: "black",
                            fontSize: "14px",
                            fontWeight: "normal",
                        }}
                        value={formData.lastname}
                        onChange={( e ) => {
                            setFormData( { ...formData, lastname: e.target.value } );
                        }}
                    />
                </InputGroup>
            </FormControl>

        </>
    );
}

export default PersonalInfo;