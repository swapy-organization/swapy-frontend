import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../Reducers/authReducer";
import { authData } from "../config/initials";
import { loginAction, signUpAction } from "../actions/authActions";

const AuthContext = createContext();
export const useAuth = () => useContext( AuthContext );

const AuthContextProvider = ( props ) => {
  const [ auth, dispatch ] = useReducer( authReducer, authData );

  const handleSignUp = async ( e ) => {
    e.preventDefault();
    const username = e.target.username.value,
      firstname = e.target.firstname.value,
      lastname = e.target.lastname.value,
      email = e.target.email.value,
      password = e.target.password.value,
      avatar = e.target.avatar.files[0],
      country = e.target.country.value,
      city = e.target.city.value;
      console.log(e.target.avatar.files[0])
    const user = new FormData();
    user.append( "username", username );
    user.append( "firstName", firstname );
    user.append( "lastName", lastname );
    user.append( "email", email );
    user.append( "password", password );
    user.append( "avatar", avatar );
    user.append( "country", country );
    user.append( "city", city );
    console.log(user.get("avatar"))
    signUpAction( dispatch, user );
  };

  const handleLogin = async ( e ) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    loginAction( dispatch, { username, password } );

  };


  return (
    <AuthContext.Provider
      value={{
        handleSignUp,
        auth,
        handleLogin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
