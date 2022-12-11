import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import AuthContextProvider from "./ContextAPI/Context/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <ChakraProvider>
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
  </ChakraProvider>
)