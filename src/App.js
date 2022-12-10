import "./App.css";
import "./scss/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import UserProfile from './components/UserProfile'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      <UserProfile />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;


