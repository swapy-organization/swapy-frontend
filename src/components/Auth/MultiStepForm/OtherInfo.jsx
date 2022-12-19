import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   
    faUserTie,
    faCity,
} from "@fortawesome/free-solid-svg-icons";
//  import { useAuth } from "../../../ContextAPI/Context/authContext";


import {
    Input,
    FormControl,
    InputLeftAddon,
    InputGroup,
    Select,
    Button,
    Box,
    Link

} from "@chakra-ui/react";
function OtherInfo({ formData, setFormData }) {
    //   const { handleSignUp, auth } = useAuth();

    return (
        <>
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
                            <FontAwesomeIcon color="black" icon={faUserTie} />
                        }
                    />
                    <Input
                        type="file"
                        placeholder="Avatar"
                        h="35px"
                        id="avatar"
                        variant="filled"
                        width="300px"
                        borderX="none"
                        borderBlockEnd="none"
                        borderBlock="none"
                        pr="5rem"
                        value={formData.avatar}
                        onChange={(e) => {
                            setFormData({ ...formData, avatar: e.target.value });
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
                        children={<FontAwesomeIcon color="black" icon={faCity} />}
                    />
                    <Input
                        type="text"
                        id="country"
                        h="35px"
                        placeholder="Country"
                        variant="filled"
                        width="300px"
                        borderX="none"
                        borderBlockEnd="none"
                        borderBlock="none"
                        pr="5rem"
                        value={formData.country}
                        onChange={(e) => {
                            setFormData({ ...formData, country: e.target.value });
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
                        children={<FontAwesomeIcon color="black" icon={faCity} />}
                    />
                    <Select name="city"
                        value={formData.city}
                        onChange={(e) => {
                            setFormData({ ...formData, city: e.target.value });
                        }}
                    >
                        <option>Select Your City</option>
                        <option>Irbid</option>
                        <option>Amman</option>
                        <option>Salt</option>
                        <option>Ma'an</option>
                        <option>Petra</option>
                        <option>Aqapa</option>
                        <option>Jerash</option>
                        <option>Ajloun</option>
                        <option>Zarqa'a</option>
                        <option>Mafraq</option>
                        <option>Karak</option>
                        <option>Tafilah</option>
                    </Select>
                </InputGroup>
            </FormControl>

            <Button
                type="submit"
                width="305px"
                color="black"
                height="35px"
                bg="#d0b4fb"
                borderX="none"
                borderY="none"
                boxShadow="0 0 0 3px var(--chakra-colors-purple)"
                variant="solid"
                // onSubmit={formData => handleSignUp(formData)}
            > Sign up Now
            </Button>
            <Box>
                Already have an account?{" "}
                <Link color="teal.500" href="/signin">
                    Sign in
                </Link>
            </Box>
        </>
    );
}

export default OtherInfo;