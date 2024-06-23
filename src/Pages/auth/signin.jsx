import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import "../../assets/css/auth.css";
// import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Component } from "react";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailOrUsername: "",
      password: "",
      emailError: "",
      passwordError: "",
    };
  }
  formSubmit = (e) => {
    e.preventDefault();
    if (this.validateInput()) {
      axios
        .post("/signin", {
          emailOrUsername: this.emailOrUsername.fname,
          password: this.state.password,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  validateInput() {
    if (!this.state.emailOrUsername > 0 && !this.state.password > 0) {
      this.setState({ emailError: "Email and password is required" });
    } else if (!this.state.emailOrUsername > 0) {
      this.setState({ emailError: "Email is required", passwordError: "" });
    } else if (!this.state.password > 0) {
      this.setState({ emailError: "", passwordError: "Password is required" });
    } else {
      this.setState({
        emailError: "",
        passwordError: "",
      });
      return true;
    }
  }
  render() {
    const inp = {
      backgroundColor: "#35393E",
      border: "1px solid #706767",
      borderRadius: "10px",
      color: "#fff",
      placeholder: "#0e0e0e",
    };
    return (
      <>
        <div className="signin d-flex">
          <div className="styled col-md-3" id="hh"></div>
          <div
            className="styledbg col-md-9 d-flex"
            style={{ margin: "auto 0" }}
          >
            <div className="col-md-3 "></div>
            <div className="col-lg-4 col-md-8 col-sm-10">
              <Form style={{ color: "#fff" }} onSubmit={this.formSubmit}>
                <h2>Sign in to Olóhun</h2>
                <br></br>

                <button
                  type="submit"
                  className="btn continue-btn-auth btn-light border"
                >
                  Sign in with Google
                </button>

                <br></br>
                <br></br>
                <br></br>
                <hr></hr>
                <div className="text-center pt-3 or">
                  <Link
                    className=""
                    to="/connectgoogle"
                    style={{ color: "#fff" }}
                  >
                    Or sign in with google
                  </Link>
                </div>
                <br></br>

                <Form.Group className="mb-3">
                  <Form.Label>Username or Email</Form.Label>
                  <span style={{ color: "red" }} className="px-2">
                    {this.state.emailError}
                  </span>
                  <Form.Control
                    placeholder="Email...."
                    type="text"
                    name="emailOrUsername"
                    className="px-3 py-2"
                    // size="lg"
                    onChange={(e) => {
                      this.setState({ emailOrUsername: e.target.value });
                    }}
                    style={inp}
                  />
                </Form.Group>
                <br></br>
                <Form.Group className="mb-3">
                  <div className="mb-3 d-flex" id="justb">
                    <Form.Label>Password</Form.Label>
                    <span style={{ color: "red" }} className="px-2">
                      {this.state.passwordError}
                    </span>
                    <Link to="/forget">Forgot password</Link>
                  </div>
                  <Form.Control
                    placeholder="Password"
                    type="password"
                    name="password"
                    className="px-3 py-2"
                    onChange={(e) => {
                      this.setState({ password: e.target.value });
                    }}
                    style={inp}
                  />
                </Form.Group>
                <br></br>

                <Button
                  variant=""
                  className="btn btn-auth px-3 py-2"
                  type="submit"
                >
                  Sign In
                </Button>
                <br></br>
                <br></br>
                <div className="text-center">
                  <h6>
                    Don’t have an account? <Link to="/signup">Sign Up</Link>
                  </h6>
                </div>
              </Form>{" "}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SignIn;
