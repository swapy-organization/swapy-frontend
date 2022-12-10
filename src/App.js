import "./App.css";
import "./scss/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import UserProfile from './components/UserProfile'
import { useEffect, useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState('');
  
  const checkAuth = () => {
    setIsAuth(true);
  }
  
  
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      setIsAuth(true);
    }
  }, [])
  
  const handleLogout=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
  }
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path='/signup' element={<Signup/>} />
          {/* <Route exact path='/signin' element={isAuth?<HomePage />:<Signin checkAuth={checkAuth} /> } /> */}
          <Route exact path='/signin' element={<Signin/> } />
          {/* <Route exact path='/items' element={isAuth?<HomePage/>:<Signin checkAuth={checkAuth} } /> */}
        </Routes>
      <UserProfile />
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;


