import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
// import { Link } from "react-router-dom";

import { Component } from "react";
import { Artist } from "./Artist";
import { ArtPiece } from "./ArtPiece";
// import { useState } from "react";
import { Header } from "./Header";
import NavBar from "../../NavBar";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navState: {
        NavbarBrand: "Olóhun",
        collection: "Collection",
        category: "Category",
        signin: "Log In",
        signup: "Sign Up",
      },
      name: "",
      email: "",
      password: "",
      dob: "",
      emailError: "",
      passwordError: "",
      locationList: ["Lagos", "Abuja", "Kaduna", "Kwara", "Enugu"],
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
    if (this.validateInput()) {
      alert("Data successfully updated.");
    }
  };

  validateInput() {
    if (!this.state.email > 0 && !this.state.password > 0) {
      this.setState({ emailError: "Email and password is required" });
    } else if (!this.state.email > 0) {
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

  // const Hook = () => {
  //   const [location, setLocation] = useState({
  //     {

  //     }
  //   });
  // }
  render() {
    const colorWhite = {
      color: "#fff",
    };

    const location = this.state.locationList.map((item, index) => {
      return <Dropdown.Item key={index}>{item}</Dropdown.Item>;
    });



    return (
      <>
        <NavBar navState={this.state.navState} />
        <Header />
        <div className="section2">
          <h2
            className=" center pb-3"
            style={{ color: "#3A98B4", paddingTop: "90px" }}
          >
            The <strong> Artistry Nexus</strong>
          </h2>
          <Artist />

          <div className="wrapper90" style={{ textAlign: "center" }}>
            <h2 className="center mb-0" style={{ paddingTop: "60px" }}>
              Explore art commission - free
            </h2>
          </div>

          <div className="explore wrapper90">
            <ArtPiece />
          </div>
          <div className="spacecontainer wrapper100">
            <a href="#" className="btn btn-md outline-btn">
              Browse More Art
            </a>
            <h2 className="pt-4 px-3">DISCOVER EXHIBITIONS AROUND</h2>

            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                Select a location
              </Dropdown.Toggle>

              <Dropdown.Menu>{location}</Dropdown.Menu>
            </Dropdown>

            <div className="space"></div>
          </div>

          <div className="sectionN wrapper100 py-5">
            <div className="wrapper90">
              <div className="col-md-7">
                <h2 style={colorWhite}>Join olóhun</h2>
                <p>WHY OLOHUN?</p>
                <p>
                  OLOHUN serves as an artistic platform that links art
                  enthusiasts, artists, galleries, and universities globally,
                  spanning over 5 Africa countries.
                </p>
                <p>
                  {" "}
                  For artists, Olohun provides the opportunity to sell art
                  online without commissions, distinguishing us from other
                  online gallery platforms. If you're looking to acquire a new
                  artwork, Olohun enables direct communication with the artist
                  network for online art purchases.
                </p>
                <p>
                  {" "}
                  Olohun facilitates free communication between artists and
                  buyers.
                </p>
                <p>
                  {" "}
                  Not interested in buying or selling art? Olohun is open to
                  anyone passionate about art and eager to connect with fellow
                  art enthusiasts. Join our free social art network today!
                </p>
                <br></br>
                <p>
                  Join us in connecting the art world – with members, artists,
                  galleries, and universities spanning over 200 countries and
                  growing.
                </p>
              </div>{" "}
              <div className="col-md-5"></div>
            </div>
          </div>
          <div id="about" className="wrapper90 py-5">
            <div className="row">
              <div className="t-form col-lg-7 col-md-6">
                <div>
                  <a className="navbar-brand" href="index.html">
                    olóhun
                  </a>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <p>
                    Build your own profile, connect with others, gain followers,
                    share posts on your wall, and enjoy various features.Think
                    of it as a theme-based social network – like LinkedIn
                    tailored for the art scene, as social as Facebook, with an
                    added shop and plenty of engaging and informative
                    content.We're based in Nigeria, but our influence and
                    popularity extend globally.
                  </p>
                </div>
                <div>
                  <p>
                    Join us in connecting the art world – with members, artists,
                    galleries, and universities spanning over 200 countries and
                    growing.
                  </p>
                </div>
                <div></div>
                <div className="mb-5">
                  <p className="follow">Follow Us</p>
                  <div className="d-flex social-icon">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-1"></div>
              <div className="col-lg-3 col-md-5">
                <div className="form">
                  <form className="signup-form">
                    <div className="text-center">
                      <a className="navbar-brand" href="index.html">
                        olóhun
                      </a>
                      <h4>Welcome to olóhun</h4>
                      <h6 className="mb-3">Explore art and connect artist</h6>
                    </div>
                    <div className="mb-1">
                      <label className="form-label">Email address *</label>
                      <br></br>
                      <strong style={{ color: "red", fontSize: "10px" }}>
                        {this.state.emailError}
                      </strong>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        onChange={(e) => {
                          this.setState({ email: e.target.value });
                        }}
                        required
                      ></input>
                    </div>
                    <div className="mb-1">
                      <label className="form-label">Password *</label>
                      <br></br>
                      <strong style={{ color: "red", fontSize: "10px" }}>
                        {this.state.passwordError}
                      </strong>

                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        onChange={(e) => {
                          this.setState({ password: e.target.value });
                        }}
                        required
                      ></input>
                    </div>
                    <div className="mb-1">
                      <label className="form-label">Date of Birth</label>
                      <input
                        type="date"
                        className="form-control"
                        id="dob"
                        placeholder="dd/mm/yyyy"
                        name="dob"
                        onChange={(e) => {
                          this.setState({ dob: e.target.value });
                        }}
                        required
                      ></input>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-danger continue-btn continue-red border"
                      onClick={this.submitHandler}
                    >
                      Continue
                    </button>
                    <div className="text-center pt-3">
                      <h5>OR</h5>
                    </div>
                    <button
                      type="submit"
                      className="btn continue-btn continue-facebook border"
                    >
                      Continue with Facebook
                    </button>
                    <button
                      type="submit"
                      className="btn continue-btn continue-google border"
                    >
                      Continue with Google
                    </button>
                    <div className="text-center py-3 form-footer">
                      <h6>
                        By continuing, you agree to olóhun’s
                        <a href="#">Terms of Service</a> and acknowledge that
                        you’ve read our <a href="#">privacy policy</a> Notice at
                        collection.
                      </h6>

                      {/* <h6>
                        Already a member? <a href="#">Log In</a>
                      </h6> */}
                    </div>
                  </form>
                  <div className="bg-grey text-center">
                    Already a member? <a href="/">Log In</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section3 footer text-center py-2">
          <i style={colorWhite}>Copyright &#169; 2024 All Right Reserved</i>
        </div>
      </>
    );
  }
}

export default Home;
