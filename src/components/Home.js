import React from "react";

// Pages
import Nav from "./Nav";

// Parallax
import { Parallax } from "react-parallax";

// Images

import img0 from "../img0.jpg";

// const image1 =
//   "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
// const image2 =
//   "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
// const image3 =
//   "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
// const image4 =
//   "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

class Home extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Parallax bgImage={img0} strength={400}>
          <div id="img" />
          <div id="span">
            <p>Vidican Raul</p>
            <span>
              <p id="next-page">Pagina următoare</p>
              <i className="fas fa-chevron-down"></i>
            </span>
          </div>
        </Parallax>
        {/* <Parallax bgImage={image1} blur={{ min: -1, max: 6 }} strength={500}>
          <div id="img" />
          <div id="span">
            <p>Blur</p>
          </div>
        </Parallax>
        <Parallax bgImage={image3} strength={-250}>
          <div id="img" />
          <div id="span">
            <p>Reverse</p>
          </div>
        </Parallax>
        <Parallax
          bgImage={image4}
          strength={1500}
          renderLayer={(percentage) => (
            <div>
              <div
                style={{
                  position: "absolute",
                  background: `rgba(255, 125, 0, ${percentage * 1})`,
                  left: "50%",
                  top: "50%",
                  borderRadius: "50%",
                  transform: "translate(-50%,-50%)",
                  width: percentage * 450,
                  height: percentage * 450,
                }}
              />
            </div>
          )}
        >
          <div id="img" />
          <div id="span">
            <p>Popout</p>
          </div>
        </Parallax> */}
      </>
    );
  }
}

export default Home;
