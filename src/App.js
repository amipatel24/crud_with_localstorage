import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/home/Home";
import AddUser from "./pages/home/AddUser";
import { createContext, useState } from "react";

export const MyContext = createContext("")
function App() {
  const [userData, setUserData]  = useState([])
  return (
    <Router>
      <MyContext.Provider value={{userData,setUserData}} >
      <div className="App">
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add-user" element={<AddUser />} />
        </Routes>
      </div>
    </MyContext.Provider>
    </Router>
  );
}

export default App;
