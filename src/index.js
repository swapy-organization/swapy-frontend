import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import AuthContextProvider from "./ContextAPI/Context/authContext";
import { BrowserRouter } from "react-router-dom";
import ItemContextProvider from "ContextAPI/Context/itemsContext";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <ChakraProvider>
  <AuthContextProvider>
  <ItemContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ItemContextProvider>
  </AuthContextProvider>
  </ChakraProvider>
)