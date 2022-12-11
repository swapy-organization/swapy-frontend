import { createContext, useState, useContext, useReducer } from "react";
import { authReducer } from "../Reducers/authReducer";
import { authData } from "../config/initials";
import { signUpAction } from "../actions/authActions";

const AuthContext = createContext();
export const useAuth = () => useContext( AuthContext );

const AuthContextProvider = ( props ) => {
    const [ auth, dispatch ] = useReducer( authReducer, authData );
    const { isAuth, setIsAuth } = useState( false );
    const { signUp, setSignUp } = useState( false );

    const handleSignUp = async ( e ) => {
        e.preventDefault();
        const username = e.target.username.value,
            firstname = e.target.firstname.value,
            lastname = e.target.lastname.value,
            avatar = e.target.avatar.value,
            email = e.target.email.value,
            password = e.target.password.value,
            country = e.target.country.value,
            city = e.target.city.value;
        const user = new FormData();
        user.append( "username", username );
        user.append( "firstname", firstname );
        user.append( "lastname", lastname );
        user.append( "avatar", avatar );
        user.append( "email", email );
        user.append( "password", password );
        user.append( "country", country );
        user.append( "city", city );
        signUpAction( dispatch, user );
        setSignUp( true );
    };


    return (
        <AuthContext.Provider
            value={{
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

