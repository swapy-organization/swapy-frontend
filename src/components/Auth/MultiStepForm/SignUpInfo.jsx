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
function SignUpInfo({ formData, setFormData }) {
    return (
        <>

            <FormControl pb="1em" borderColor="black" isRequired>
                <InputGroup
                    variant="outline"
                    borderRadius="5px"
                    h="35px"
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
                            <FontAwesomeIcon color="black" icon={faEnvelope} />
                        }
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        h="35px"
                        id="email"
                        variant="filled"
                        width="300px"
                        borderX="none"
                        borderBlockEnd="none"
                        borderBlock="none"
                        pr="5rem"
                        value={formData.email}
                        onChange={(event) =>
                            setFormData({ ...formData, email: event.target.value })
                        }
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
                        children={<FontAwesomeIcon color="black" icon={faLock} />}
                    />
                    <Input
                        type="password"
                        id="password"
                        h="35px"
                        placeholder="********"
                        variant="filled"
                        width="300px"
                        borderX="none"
                        borderBlockEnd="none"
                        borderBlock="none"
                        pr="5rem"
                        value={formData.password}
                        onChange={(event) =>
                            setFormData({ ...formData, password: event.target.value })
                        }
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
                        children={<FontAwesomeIcon color="black" icon={faLock} />}
                    />
                    <Input
                        type="password"
                        id="confirmPassword"
                        h="35px"
                        placeholder="********"
                        variant="filled"
                        width="300px"
                        borderX="none"
                        borderBlockEnd="none"
                        borderBlock="none"
                        pr="5rem"
                        value={formData.confirmPassword}
                        onChange={(event) =>
                            setFormData({ ...formData, confirmPassword: event.target.value })
                        }
                    />
                </InputGroup>
            </FormControl>
        </>


    );
}

export default SignUpInfo;