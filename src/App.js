import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

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
          <Route exact path='/signup' element={<Signup/>} />
          {/* <Route exact path='/signin' element={isAuth?<HomePage />:<Signin checkAuth={checkAuth} /> } /> */}
          <Route exact path='/signin' element={<Signin/> } />
          {/* <Route exact path='/items' element={isAuth?<HomePage/>:<Signin checkAuth={checkAuth} } /> */}

        </Routes>

     <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
