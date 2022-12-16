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
import PageNotFound from "404";
import BuyOrSwap from "./components/BuyOrSwap/buyOrSwap";

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
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />
        {/* Auth routes */}
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path='/signup' element={<Signup />} />
        {/* User routes */}
        <Route exact path='/userprofile' element={isAuth ? <UserProfile /> : <Signin />} />
        <Route exact path='/additem' element={isAuth ? <AddItemPage /> : <Signin />} />
        <Route path='/edititem/:id' element={isAuth ? <EditItemPage /> : <Signin />} />
        <Route path='/swap/:id' element={<BuyOrSwap />} />
        {/* 404 routes */}
        <Route path="*" element={<PageNotFound />} />
        <Route path="404" element={<PageNotFound />} />
        <Route path="" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;


