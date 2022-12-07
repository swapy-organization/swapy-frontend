// create the authication context

import axios from "axios";

import { createContext, useState } from "react";
import base64 from "base-64";
import cookies from "react-cookies";


export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const {isAuth, setIsAuth} = useState(false);
    const {signUp, setSignUp} = useState(false);


    const handleSignUp = async (e) => {
        e.preventDefault();
        const user = {
            username: e.target.username.value,
            firstname: e.target.firstname.value,
            lastname: e.target.lastname.value,
            avatar: e.target.avatar.value,
            email: e.target.email.value,
            password: e.target.password.value,
            confirmPassword: e.target.confirmPassword.value,
            country: e.target.country.value,
            city: e.target.city.value,
        };
        console.log(user);

        const response = await axios.post(
            "https://swapybackend.herokuapp.com/signup",
            user
        );
        console.log(response);
        setSignUp(true);
    };
    


    const handleLogin = async (e) => {
        e.preventDefault();
        const user = {
            username: e.target.username.value,
            password: e.target.password.value,
        };

        const encoded = base64.encode(`${user.username}:${user.password}`);
        const response = await axios.post(
            "https://swapybackend.herokuapp.com/signin",
            {},
            {
                headers: {
                    Authorization: `Basic ${encoded}`,
                },
            }
        );
        console.log(response);
        cookies.save("auth", response.data.token);
        setIsAuth(true);
    };

    return (
        <AuthContext.Provider
            value={{
                handleLogin,
                handleSignUp,
                isAuth,
                signUp,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;

