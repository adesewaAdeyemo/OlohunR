import React from "react";
import { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import img1 from "../../assets/images/Rectangle8.png";
import img2 from "../../assets/images/Rectangle10.png";
import img3 from "../../assets/images/Rectangle9.png";
import img4 from "../../assets/images/image13.png";
import prev from "../../assets/images/prev.png";
import next from "../../assets/images/next.png";

export class Header extends Component {
  // state = {
  //   navState: {}};
  // componentDidMount(){
  //   const newNav = {
  //   NavbarBrand: "Olóhun",
  //   home: "Home",
  //   category: "Category",
  //   signin: "Log In",
  //   signup: "Sign Up",
  // }
  //   this.setState({navState: newNav})
  // }

  render() {
    return (
      <div className="section1">
        <div className="hero">
          <div className="wrapper80 herosm">
            <h1>
              Art skill's
              <br></br>shape society
            </h1>
            <p className="">
              Passion Or Profession, Find Your Artistic Haven Here
            </p>
            <Link className="btn block-btn getstated" to="/signup">
              Get Started
            </Link>
          </div>

          <div className="wrapper90">
            <div className="d-flex justify-content-between trend main">
              {/* First Column: Round Carousel with Left Arrow  */}
              <div className="d-flex align-center">
                <div
                  id="carouselRight"
                  className="carousel slide round-carousel"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src={img1}
                        className="d-block w-100"
                        alt="Image 4"
                      ></img>
                    </div>
                    <div className="carousel-item">
                      <img
                        src={img2}
                        className="d-block w-100"
                        alt="Image 5"
                      ></img>
                    </div>
                    <div className="carousel-item">
                      <img
                        src={img3}
                        className="d-block w-100"
                        alt="Image 6"
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="align-center">
                  <span
                    className=""
                    data-bs-target="#carouselRight"
                    data-bs-slide="next"
                  >
                    <i
                      className="fa fa-long-arrow-right arrow-bg l"
                      aria-hidden="true"
                    ></i>
                    <span className="px-2">Trending Piece</span>
                  </span>
                </div>
              </div>

              {/*Second Column: Middle Arrow */}
              <div className="arrow-column align-center">
                <a href="/">
                  <img src={prev} alt="" className="prev"></img>
                </a>
                <a href="/">
                  <img src={next} alt="" className="next"></img>
                </a>
              </div>

              {/*Third Column: Round Carousel with Right Arrow */}
              <div className="third d-flex align-center">
                <div>
                  <span
                    className=""
                    data-bs-target="#carouselLeft"
                    data-bs-slide="prev"
                  >
                    <span className="px-2">Hot Expression</span>
                    <i
                      className="fa fa-long-arrow-left arrow-bg r"
                      aria-hidden="true"
                    ></i>
                  </span>
                </div>
                <div
                  id="carouselLeft"
                  className="carousel slide round-carousel"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src={img3}
                        className="d-block w-100"
                        alt="Image 1"
                      ></img>
                    </div>
                    <div className="carousel-item">
                      <img
                        src={img1}
                        className="d-block w-100"
                        alt="Image 2"
                      ></img>
                    </div>
                    <div className="carousel-item">
                      <img
                        src={img4}
                        className="d-block w-100"
                        alt="Image 3"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
