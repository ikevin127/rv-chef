import React from "react";

// Pages
import Nav from "./Nav";

// Parallax
import { Parallax } from "react-parallax";

// Images
import img0 from "../img0.jpg";
import img1 from "../img1.jpg";
import img2 from "../img2.jpg";
import img3 from "../img3.jpg";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};

    this.aboutRef = React.createRef();
  }

  render() {
    return (
      <>
        <Nav />
        <Parallax bgImage={img0} strength={600}>
          <div id="img" />
          <div id="span">
            <p>Vidican Raul</p>
            <span
              onClick={() =>
                window.scrollTo(0, this.aboutRef.current.offsetTop)
              }
            >
              <p id="next-page">Pagina următoare</p>
              <i className="fas fa-chevron-down"></i>
            </span>
          </div>
        </Parallax>
        <div ref={this.aboutRef} className="about-chef">
          <div className="portrait">
            <img src={img1} alt="Vidican Raul Portret" />
          </div>
          <div className="about-text">
            <div className="title-sep">
              <h1 id="meet">Cunoaşte bucătarul</h1>
              <hr />
            </div>
            <p id="text">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <p id="contact">Tel: 123-456-7890 | Email: info@mysite.com</p>
          </div>
        </div>
        <Parallax className="parallax2" bgImage={img2} strength={700}>
          <div id="img2" />
          <h1>Poc pită cu unsoare</h1>
        </Parallax>
        <div className="about-chef">
          <div className="portrait">
            <img src={img3} alt="Vidican Raul Portret" />
          </div>
          <div className="about-text">
            <div className="title-sep">
              <h1 id="meet">Îţi iei cuţâte</h1>
              <hr />
            </div>
            <p id="text">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <p id="contact">Tel: 123-456-7890 | Email: info@mysite.com</p>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
