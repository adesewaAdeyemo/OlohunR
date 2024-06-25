import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

import "../../assets/css/auth.css";
// import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { Component } from "react";

class EmailSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      dob: "",
      password: "",
      emailError: "",
      passwordError: "",
    };
  }
  formSubmit = (e) => {
    e.preventDefault();
    alert("ok");

    axios
      .post("/signup", {
        fname: this.state.fname,
        lname: this.state.lname,
        email: this.state.email,
        dob: this.state.dob,
        password: this.state.password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
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
          <div className="styled col-md-3 pt-4" id="hh">
            <Link to="/" className="anavbar-brand">
              Olóhun
            </Link>
          </div>
          <div
            className="styledbg col-md-9 d-flex"
            style={{ margin: "auto 0" }}
          >
            <div className="col-md-3"></div>
            <div className="col-lg-4 col-md-8 col-sm-10">
              <Form style={{ color: "#fff" }} onSubmit={this.formSubmit}>
                <h2 className="">Sign up with Olóhun</h2>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      className="px-3 py-2"
                      onChange={(e) => {
                        this.setState({ fname: e.target.value });
                      }}
                      style={inp}
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      name="name"
                      className="px-3 py-2"
                      onChange={(e) => {
                        this.setState({ lname: e.target.value });
                      }}
                      style={inp}
                    />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    placeholder="Email"
                    type="email"
                    name="email"
                    className="px-3 py-2"
                    onChange={(e) => {
                      this.setState({ email: e.target.value });
                    }}
                    style={inp}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    placeholder="Date of birth"
                    type="date"
                    name="dob"
                    className="px-3 py-2"
                    onChange={(e) => {
                      this.setState({ dob: e.target.value });
                    }}
                    style={inp}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
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

                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="I agree to Olóhun’s Terms of Service, Privacy Policy and 
default notification setting."
                  />
                </Form.Group>

                <Button
                  variant=""
                  className="btn btn-auth px-3 py-2"
                  type="submit"
                >
                  Create an account
                </Button>
                <br></br>
                <br></br>
                <div className="text-center">
                  <h6>
                    Already a member? <Link to="/signin">Log In</Link>
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

export default EmailSignUp;
