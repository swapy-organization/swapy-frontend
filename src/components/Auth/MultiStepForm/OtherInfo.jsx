import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   
    faUserTie,
    faCity,
} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'

import {
    Input,
    FormControl,
    InputLeftAddon,
    InputGroup,
    Select,
    Box,
} from "@chakra-ui/react";
function OtherInfo({ formData, setFormData }) {

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
                    <input style={{height: "35px" , width: "300px" , border: "none" , borderRadius: "5px" , backgroundColor: "#e8f0fe" , color: "black" , fontSize: "14px" , fontWeight: "normal" , paddingLeft: "1rem" , paddingRight: "5rem"}}
                        type="file"
                        placeholder="Avatar"
                        id="avatar"
                        onChange={(e) => {
                            setFormData({ ...formData, avatar: e.target.files[0] });
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
        </>
    );
}

export default OtherInfo;