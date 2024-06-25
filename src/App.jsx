import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Pages/web/Home";

// import Home from "./component/Home";
import About from "./Pages/About";
import SignUp from "./Pages/auth/signup";
import SignIn from "./Pages/auth/signin";
// import API from "./component/testapi";
import ConnectGoogle from "./Pages/auth/gsignup"
import EmailSignUp from "./Pages/auth/esignup";
import ForgetPassword from "./Pages/auth/forget";

function App() {
  return (
    <div>
      <Router>
        <div>
          {/*two navs  (logic)*/}
          {/* React context */}
          {/* Note: no state in the app */}
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forget" element={<ForgetPassword />} />
          <Route path="/signup/gsignup" element={<ConnectGoogle />} />
          <Route path="/signup/emailsignup" element={<EmailSignUp />} />
        </Routes>{" "}
      </Router>
    </div>
  );
}

export default App;
