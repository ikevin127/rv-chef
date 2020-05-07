import React, { Component } from "react";
import logo from "../rv.png";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTop: true,
    };
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  render() {
    return (
      <>
        <div className={this.state.isTop ? "main-nav" : "main-nav black"}>
          <div className="logo-area">
            <img src={logo} alt="Vidican Raul Logo" />
          </div>
          <div className="main-menu">
            <ul className="nav-list">
              <span className="btn-home">Prima pagină</span>
              <span className="btn-menu">Meniu</span>
              <span className="btn-recipes">Reţete</span>
              <span className="btn-about">Despre mine</span>
              <span className="btn-contact">Contact</span>
              <a id="fb" href="https://www.facebook.com/vidicanraul1/">
                <i
                  className="fab fa-facebook-square"
                  title="Pagină Facebook"
                ></i>
              </a>
              <a id="ig" href="https://www.instagram.com/raul_vidican1/">
                <i className="fab fa-instagram" title="Pagină Instagram"></i>
              </a>
            </ul>
          </div>
          {/* <div className="hamburger-menu">Hamburger menu</div> */}
        </div>
      </>
    );
  }
}

export default Nav;
