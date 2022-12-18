import "./App.css";
import "./scss/App.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import HomePage from "./components/HomePage";
import UserProfile from './components/UserProfile';
import { useEffect, useState } from 'react';
import { useAuth } from "./ContextAPI/Context/authContext";
import { useItem } from "./ContextAPI/Context/itemsContext";
import AddItemPage from "./components/itemsCRUD/addItem";
import EditItemPage from "./components/itemsCRUD/editItem";
import BuyOrSwap from "./components/BuyOrSwap/buyOrSwap";
import ListUserProfile from "./components/BuyOrSwap/listUserProfile";
import PageNotFound from "404";
import MyChatComponent from "chat";
import swal from 'sweetalert';
import LandingPage from "components/LandingPage";

function App () {
  const [ isAuth, setIsAuth ] = useState( false );
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { itemState } = useItem();
  const callSweetAlert = () => {
    if ( auth.alert.message ) {
      swal( "", auth.alert.message, auth.alert.type );
    }
    if ( itemState.alert.message ) {
      swal( "", itemState.alert.message, itemState.alert.type );
    }
  };

  const navegateTo = ( nav ) => {
    setTimeout( () => {
      navigate( nav );
    }, 2000 );
  };
  useEffect( () => {
    callSweetAlert();
    navegateTo( auth.navigation );
  }, [ auth ] );

  useEffect( () => {
    const authCheck = localStorage.getItem( "isAuth" );
    if ( authCheck === 'true' ) {
      setIsAuth( true );
    }
  }, [] );

  useEffect( () => {
    callSweetAlert();
    navegateTo( itemState.navigation );
  }, [ itemState ] );


  return (
    <div className="App">
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<LandingPage />} />
        {/* Auth routes */}
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path='/signup' element={<Signup />} />
        {/* User routes */}
        if ( isAuth ) {
          <>
        <Route exact path='/userprofile' element=<UserProfile /> />
        <Route exact path='/additem' element=<AddItemPage /> />
        <Route path='/edititem/:id' element=<EditItemPage /> />
        <Route path='/message/:id' element={<MyChatComponent />} />
        <Route path='/profile/:id' element={<ListUserProfile />} />
          </>
        }
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


