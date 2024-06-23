import React from "react";
import { Component } from "react";

import artist1 from "../../assets/images/Artist one 1.png";
import art1 from "../../assets/images/Rectangle10.png";
import art2 from "../../assets/images/Rectangle8.png";
import art3 from "../../assets/images/Rectangle9.png";

export class ArtPiece extends Component {
  state = {
    art: [
      {
        artist: {
            name: "",
            img: ""
        },
        img: "",
        rating: "",
        likes: "",
      },
    ],
  };


  updateArt = (art) => {
    const newArt = art.map((item) =>{
        return{
            artistName: item.artistName,
            artistImg: item.artistImg,
            img: item.img,
            rating: item.rating,
            likes: item.likes
        };
    });
    this.setState({art: newArt});
  };

    componentDidMount() {
        const art = [
          {
            artistName: "Deyemi",
            artistImg: artist1,
            img: "https://res.cloudinary.com/dorjfo4ca/image/upload/v1692650275/Henry/Martechy/clay2_p6saxa.jpg",
            rating: 2,
            likes: 346,
          },
        ];
        this.updateArt(art)
    }
  render() {
    const arts = this.state.art;
    const artpiece = arts.map((item, index)=>{
        return (
          <div className="column" key={index}>
            <img src={item.img} className="art-image"></img>
            <div className="count">
              <div className="artist-name">
                <img src={item.artistImg} className="artist-icon"></img>
                {item.artistName}
              </div>
              <div className="rate">
                <span>
                  <i className="fa fa-heart" aria-hidden="true"></i>{" "}
                  {item.likes}
                </span>
                <span>
                  <i className="fa fa-eye" aria-hidden="true"></i> {item.rating}
                </span>
              </div>
            </div>
          </div>
        );
    })
    return (
      <>
        <div className="row gx-5">
          {artpiece}


          <div className="column">
            <img src={art1} className="art-image"></img>
            <div className="count">
              <div className="artist-name">
                <img src={artist1} className="artist-icon"></img>Artist Name 1
              </div>
              <div className="rate">
                <span>
                  <i className="fa fa-eye" aria-hidden="true"></i> 500
                </span>
                <span>
                  <i className="fa fa-heart" aria-hidden="true"></i> 33.2k
                </span>
              </div>
            </div>
          </div>
          <div className="column">
            <img src={art2} className="art-image"></img>
            <div className="count">
              <div className="artist-name">
                <img src={artist1} className="artist-icon"></img>Artist Name 1
              </div>
              <div className="rate">
                <span>
                  <i className="fa fa-eye" aria-hidden="true"></i> 500
                </span>
                <span>
                  <i className="fa fa-heart" aria-hidden="true"></i> 33.2k
                </span>
              </div>
            </div>
          </div>
          <div className="column">
            <img src={art3} className="art-image"></img>
            <div className="count">
              <div className="artist-name">
                <img src={artist1} className="artist-icon"></img>Artist Name 1
              </div>
              <div className="rate">
                <span>
                  <i className="fa fa-eye" aria-hidden="true"></i> 500
                </span>
                <span>
                  <i className="fa fa-heart" aria-hidden="true"></i> 33.2k
                </span>
              </div>
            </div>
          </div>
          <div className="column">
            <img src={art1} className="art-image"></img>
            <div className="count">
              <div className="artist-name">
                <img src={artist1} className="artist-icon"></img>Artist Name 1
              </div>
              <div className="rate">
                <span>
                  <i className="fa fa-eye" aria-hidden="true"></i> 500
                </span>
                <span>
                  <i className="fa fa-heart" aria-hidden="true"></i> 33.2k
                </span>
              </div>
            </div>
          </div>
          <div className="column">
            <img src={art3} className="art-image"></img>
            <div className="count">
              <div className="artist-name">
                <img src={artist1} className="artist-icon"></img>Artist Name 1
              </div>
              <div className="rate">
                <span>
                  <i className="fa fa-eye" aria-hidden="true"></i> 500
                </span>
                <span>
                  <i className="fa fa-heart" aria-hidden="true"></i> 33.2k
                </span>
              </div>
            </div>
          </div>
          <div className="column">
            <img src={art1} className="art-image"></img>
            <div className="count">
              <div className="artist-name">
                <img src={artist1} className="artist-icon"></img>Artist Name 1
              </div>
              <div className="rate">
                <span>
                  <i className="fa fa-eye" aria-hidden="true"></i> 500
                </span>
                <span>
                  <i className="fa fa-heart" aria-hidden="true"></i> 33.2k
                </span>
              </div>
            </div>
          </div>
          <div className="column">
            <img src={art2} className="art-image"></img>
            <div className="count">
              <div className="artist-name">
                <img src={artist1} className="artist-icon"></img>Artist Name 1
              </div>
              <div className="rate">
                <span>
                  <i className="fa fa-eye" aria-hidden="true"></i> 500
                </span>
                <span>
                  <i className="fa fa-heart" aria-hidden="true"></i> 33.2k
                </span>
              </div>
            </div>
          </div>
          <div className="column">
            <img src={art3} className="art-image"></img>
            <div className="count">
              <div className="artist-name">
                <img src={artist1} className="artist-icon"></img>Artist Name 1
              </div>
              <div className="rate">
                <span>
                  <i className="fa fa-eye" aria-hidden="true"></i> 500
                </span>
                <span>
                  <i className="fa fa-heart" aria-hidden="true"></i> 33.2k
                </span>
              </div>
            </div>
          </div>
          <div className="column">
            <img src={art1} className="art-image"></img>
            <div className="count">
              <div className="artist-name">
                <img src={artist1} className="artist-icon"></img>Artist Name 1
              </div>
              <div className="rate">
                <span>
                  <i className="fa fa-eye" aria-hidden="true"></i> 500
                </span>
                <span>
                  <i className="fa fa-heart" aria-hidden="true"></i> 33.2k
                </span>
              </div>
            </div>
          </div>
          <div className="column">
            <img src={art3} className="art-image"></img>
            <div className="count">
              <div className="artist-name">
                <img src={artist1} className="artist-icon"></img>Artist Name 1
              </div>
              <div className="rate">
                <span>
                  <i className="fa fa-eye" aria-hidden="true"></i> 500
                </span>
                <span>
                  <i className="fa fa-heart" aria-hidden="true"></i> 33.2k
                </span>
              </div>
            </div>
          </div>
          <div className="column">
            <img src={art1} className="art-image"></img>
            <div className="count">
              <div className="artist-name">
                <img src={artist1} className="artist-icon"></img>Artist Name 1
              </div>
              <div className="rate">
                <span>
                  <i className="fa fa-eye" aria-hidden="true"></i> 500
                </span>
                <span>
                  <i className="fa fa-heart" aria-hidden="true"></i> 33.2k
                </span>
              </div>
            </div>
          </div>
          <div className="column">
            <img src={art2} className="art-image"></img>
            <div className="count">
              <div className="artist-name">
                <img src={artist1} className="artist-icon"></img>Artist Name 1
              </div>
              <div className="rate">
                <span>
                  <i className="fa fa-eye" aria-hidden="true"></i> 500
                </span>
                <span>
                  <i className="fa fa-heart" aria-hidden="true"></i> 33.2k
                </span>
              </div>
            </div>
          </div>
          <div className="column">
            <img src={art3} className="art-image"></img>
            <div className="count">
              <div className="artist-name">
                <img src={artist1} className="artist-icon"></img>Artist Name 1
              </div>
              <div className="rate">
                <span>
                  <i className="fa fa-eye" aria-hidden="true"></i> 500
                </span>
                <span>
                  <i className="fa fa-heart" aria-hidden="true"></i> 33.2k
                </span>
              </div>
            </div>
          </div>
          <div className="column">
            <img src={art1} className="art-image"></img>
            <div className="count">
              <div className="artist-name">
                <img src={artist1} className="artist-icon"></img>Artist Name 1
              </div>
              <div className="rate">
                <span>
                  <i className="fa fa-eye" aria-hidden="true"></i> 500
                </span>
                <span>
                  <i className="fa fa-heart" aria-hidden="true"></i> 33.2k
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
