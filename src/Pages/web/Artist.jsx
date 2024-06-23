import React from "react";
import { Component } from "react";

import artist1 from "../../assets/images/Artist one 1.png";
import artist2 from "../../assets/images/Artist one.png";
import artist3 from "../../assets/images/Artist two(1).png";
import artist4 from "../../assets/images/Artist two(2).png";
import artist5 from "../../assets/images/Artist two.png";
import artist6 from "../../assets/images/Artist5.png";
// import artist7 from "../../assets/images/image 8.png";




export class Artist extends Component {
  state = {
    artist: [
      {
        name: "",
        img: "",
        category: "",
        location: "",
      },
    ],
  };

  updateArtists = (recievedArtist) => {
    const newArtists = recievedArtist.map((item) => {
      return {
        name: item.name,
        img: item.img,
        category: item.category,
        location: item.location,
      };
    });

    this.setState({ artist: newArtists });
  };

  componentDidMount() {
    const recievedArtist = [
      {
        name: "Ogundipe Adeyemi",
        img: artist4,
        category: "Paiter",
        location: "Abuja",
      },
      { name: "", img: "", category: "", location: "" },
    ];

    this.updateArtists(recievedArtist);
  }

  render() {
    
    const artistgroup = this.state.artist;
    const artist = artistgroup.map((item, index) => {
      return(
          <div className="scroll-item" key = {index}>
            <div className="gradient-overlay"></div>
            <img
              src={item.img}
              className="d-block w-100"
            ></img>
            <div className="image-title">
              <h5 className="name">{item.name}</h5>
              <i className="category">{item.category}</i>
              <p className="state">{item.location}</p>
            </div>
          </div>
      )
    });

    return (
      <>
        <div className="Carousel">
          <div className="slider">
            <div className="slides">
              {artist}




              <img src={artist1} className="slide mx-3"></img>
              <img src={artist2} className="slide mx-3"></img>
              <img src={artist3} className="slide mx-3"></img>
              <img src={artist4} className="slide mx-3"></img>
              <img src={artist5} className="slide mx-3"></img>
              <img src={artist3} className="slide mx-3"></img>
              <img src={artist1} className="slide mx-3"></img>
              <img src={artist4} className="slide mx-3"></img>
              <img src={artist6} className="slide mx-3"></img>
              <img src={artist2} className="slide mx-3"></img>
              <img src={artist5} className="slide mx-3"></img>{" "}
              <img src={artist3} className="slide mx-3"></img>
              <img src={artist1} className="slide mx-3"></img>
              <img src={artist4} className="slide mx-3"></img>
              <img src={artist6} className="slide mx-3"></img>
              <img src={artist2} className="slide mx-3"></img>
              <img src={artist5} className="slide mx-3"></img>{" "}
              <img src={artist3} className="slide mx-3"></img>
              <img src={artist1} className="slide mx-3"></img>
              <img src={artist4} className="slide mx-3"></img>
              <img src={artist6} className="slide mx-3"></img>
              <img src={artist2} className="slide mx-3"></img>
              <img src={artist5} className="slide mx-3"></img>
            </div>
          </div>
        </div>
      </>
    );
  }
}