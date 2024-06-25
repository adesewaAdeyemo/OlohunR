import React, { Component, useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import "../../assets/css/auth.css";
// import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AppModal from "../../component/modal";


class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      message: "",
      emailError: "",
      modal: false
    };
  }

  formSubmit = (e) => {
    e.preventDefault();
    if (this.validateInput()) {
      this.setState({
        message: "If an account with that email exists, a password reset link has been sent.",
        modal: true,
    });


  }
  };

  validateInput() {
    if (!this.state.email > 0) {
      this.setState({ emailError: "Email is required" });
    } else{
      this.setState({ emailError: "" });
      return true;
    }
  }
  


  render() {
    const inp = {
      backgroundColor: "#35393E",
      border: "1px solid #706767",
      borderRadius: "10px",
      color: "#fff",
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
                <h2>Forget Password</h2>
                <br></br>
                <div style={{ marginBottom: "10px" }}>
                  <label htmlFor="email">Email Address:</label>
                  <span style={{ color: "red" }} className="px-2">
                    {this.state.emailError}
                  </span>
                  <input
                    type="email"
                    id="email"
                    value={this.state.email}
                    onChange={(e) => {
                      this.setState({ email: e.target.value });
                    }}
                    style={inp}
                    className="px-3 py-2 w-100 my-3"
                  />
                </div>
                <Button
                  variant=""
                  className="btn btn-auth px-3 py-2"
                  type="submit"
                  onClick={this.validateInput}
                >
                  Send Reset Link
                </Button>
              </Form>{" "}
              <AppModal
                show={this.state.modal}
                onHide={() => {
                  this.setState({ modal: false });
                }}
                header="Successful"
                message={this.state.message}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ForgetPassword;
