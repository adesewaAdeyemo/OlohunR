import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Pages/web/Home";
import NavBar from "./NavBar";
import { useState } from "react";

// import Home from "./component/Home";
import About from "./Pages/About";
import SignUp from "./Pages/auth/signup";
import SignIn from "./Pages/auth/signin";
// import API from "./component/testapi";
import ConnectGoogle from "./Pages/auth/gsignup"
import EmailSignUp from "./Pages/auth/esignup";
import ForgetPassword from "./Pages/auth/forget";

function App() {
  const [navState, setNavState] = useState({
    NavbarBrand: "Olóhun",
    collection: "Collection",
    category: "Category",
    signin: "Log In",
    signup: "Sign Up",
  });

  // const navState = {
  //   NavbarBrand: "Olóhun",
  //   home: "Home",
  //   category: "Category",
  //   signin: "Log In",
  //   signup: "Sign Up",
  // };
  // let navState= {};

  function authNav() {
    setNavState({
      NavbarBrand: "Olóhun",
      home: "",
      category: "",
      signin: "",
      signup: "",
    });
  }
  return (
    <div>
      <Router>
        <div>
          <NavBar navState={navState} />
          {/* <API /> */}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forget" element={<ForgetPassword />} />
          <Route path="/signup/connectgoogle" element={<ConnectGoogle />} />
          <Route path="/signup/emailsignup" element={<EmailSignUp />} />
        </Routes>{" "}
      </Router>
    </div>
  );
}

export default App;
