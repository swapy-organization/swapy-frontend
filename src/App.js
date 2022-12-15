import "./App.css";
import "./scss/App.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import HomePage from "./components/HomePage";
import UserProfile from './components/UserProfile';
import { useEffect, useState } from 'react';
import { useAuth } from "./ContextAPI/Context/authContext";
import ErrorHandler from "./errorNotify";
import AddItemPage from "./components/itemsCRUD/addItem";
import EditItemPage from "./components/itemsCRUD/editItem";

function App () {
  const [ isAuth, setIsAuth ] = useState( true );
  const navigate = useNavigate();
  const navegateTo = () => {
    navigate( '/' );
  };
  const { auth } = useAuth();
  // useEffect( () => {
  //   const authCheck = localStorage.getItem( "isAuth" );
  //   if ( authCheck === 'true' ) {
  //     setIsAuth( true );
  //     navegateTo();
  //   }
  // }, [auth] );


  return (
    <div className="App">
      {auth.error && <ErrorHandler error={auth.error.message} />}
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path='/signup' element={<Signup />} />
        {/* <Route exact path='/signin' element={<Signin />} /> */}
        <Route exact path='/userprofile' element={isAuth ? <UserProfile /> : <Signin />} />
        <Route exact path='/additem' element={isAuth ? <AddItemPage /> : <Signin />} />
        <Route path='edititem/:id' element={isAuth ? <EditItemPage /> : <Signin />} />
      </Routes>
    </div>
  );
}

export default App;


