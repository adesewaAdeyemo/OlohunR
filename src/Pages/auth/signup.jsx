import React from "react";
import "../../assets/css/auth.css"
// import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

import { Component } from "react";


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  formSubmit=(e)=>{
    e.preventDefault();
  }

  // componentDidMount() {
  // }

  render() {
    return (
      <>
        <div className="signup d-flex">
          <div className="styled col-md-3" id="hh"></div>
          <div
            className="styledbg col-md-9 d-flex"
            style={{ margin: "auto 0" }}
          >
            <div className="col-md-3"></div>
            <div className="col-lg-4 col-md-8 col-sm-10">
              <Form
                className=""
                style={{ color: "#fff" }}
                onSubmit={this.formSubmit}
              >
                <div className="">
                  <h2 className="">Sign up with Olóhun</h2>
                </div>
                <br></br>

                <button
                  type="submit"
                  className="btn continue-btn-auth btn-light border"
                >
                  <Link to="connectgoogle">Sign up with Google</Link>
                </button>
                <br></br>
                <br></br>
                <br></br>
                <hr></hr>
                <div className="text-center pt-3">
                  <h5 className="or">OR</h5>
                </div>
                <br></br>

                <button
                  type="submit"
                  className="btn continue-btn-auth-email border"
                  style={{ color: "#fff" }}
                >
                  <Link to="emailsignup" style={{ color: "#fff" }}>
                    Sign up with Email
                  </Link>
                </button>
                <br></br>
                <br></br>
                <div className="text-center py-3 form-footer">
                  <h6 style={{ color: "#fff" }}>
                    By creating an account you agree with our Terms of service,
                    Privacy Policy, and our default Notification Settings
                  </h6>
                  <br></br>

                  <h6>
                    Already a member? <Link to="/signin">Log In</Link>
                  </h6>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </>
    );
  }
}


export default SignUp