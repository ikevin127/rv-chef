import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Portfolios & Modals
import {
  ArtCafe,
  AtraPraova,
  CaeliaMamaia,
  RocaBruna,
  NukaCluj,
  VinSibiu,
} from "./Portfolio";
import { RocaBrunaModal, ReviewsCarousel, HomeCarousel } from "./Carousel";

/* Bootstrap & FontAwesome */
import { Alert, Button, Card, Form, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faBars,
  faTimes,
  faAngleDoubleUp,
} from "@fortawesome/free-solid-svg-icons";

// Parallax
import { Parallax } from "react-parallax";

// React Transition
import { CSSTransition } from "react-transition-group";

// Side menu
import { pushRotate as Menu } from "react-burger-menu";

// Axios
import axios from "axios";

// Array & Images
import arr from "../array.json";
import logo from "../img/rv.png";
import img1 from "../img/parallax/img1.jpg";
import end from "../img/parallax/5.jpg";

// Google analytics
import TagManager from "react-gtm-module";
const tagManagerArgs = {
  gtmId: "GTM-MFXND56",
};

TagManager.initialize(tagManagerArgs);

export default function Home() {
  // State
  const [isTop, setIsTop] = useState(false);
  const [rocaModal, setRocaModal] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [art, setArt] = useState(false);
  const [atra, setAtra] = useState(false);
  const [caelia, setCaelia] = useState(false);
  const [roca, setRoca] = useState(false);
  const [nuka, setNuka] = useState(false);
  const [sibiu, setSibiu] = useState(false);
  const [isLoading, setLoad] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Refs
  const homeRef = useRef();
  const chefRef = useRef();
  const portfolioRef = useRef();
  const recenziiRef = useRef();
  const contactRef = useRef();
  const formRef = useRef(null);

  // Variables
  let currentYear = new Date().getFullYear();

  const toggleMenu = () => {
    setOpenNav(!openNav);
  };

  const handleStateChange = (state) => {
    setOpenNav(state.isOpen);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    setLoad(true);
    axios
      .post("https://spleeter.co.uk/rv", {
        name: name,
        phone: phone,
        text: message,
      })
      .then((res) => {
        if (res.data.status === "true") {
          setLoad(false);
          setSuccess(true);
          setName("");
          setPhone("");
          setMessage("");
          setValidated(false);
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        } else {
          setLoad(false);
          setError(true);
          setName("");
          setPhone("");
          setMessage("");
          setValidated(false);
          setTimeout(() => {
            setError(false);
          }, 3000);
        }
      })
      .catch((err) => {
        setLoad(false);
        setError(true);
        setName("");
        setPhone("");
        setMessage("");
        setValidated(false);
        setTimeout(() => {
          setError(false);
        }, 3000);
      });
  };

  const portFunc = (id) => {
    switch (id) {
      case 6:
        return setSibiu(true);
      case 5:
        return setNuka(true);
      case 4:
        return setRoca(true);
      case 3:
        return setCaelia(true);
      case 2:
        return setAtra(true);
      case 1:
        return setArt(true);
      default:
        return null;
    }
  };

  useEffect(() => {
    document.addEventListener(
      "scroll",
      (e) => {
        if (window.scrollY > 400) {
          setIsTop(true);
        } else {
          setIsTop(false);
        }

        return () => {
          document.removeEventListener("scroll");
        };
      },
      []
    );
  });

  return (
    <>
      <CSSTransition in={isTop} timeout={1500} classNames="up" unmountOnExit>
        <div
          onClick={() => window.scrollTo(0, homeRef.current.offsetTop)}
          className="scroll-up"
        >
          <FontAwesomeIcon icon={faAngleDoubleUp} />
        </div>
      </CSSTransition>
      <Menu
        isOpen={openNav}
        onStateChange={(state) => handleStateChange(state)}
        right
        disableAutoFocus
        customBurgerIcon={false}
        pageWrapId={"page-wrapper"}
        outerContainerId={"root"}
      >
        <div className="side-nav">
          <div className="logo-area">
            <div className="close-btn">
              <FontAwesomeIcon
                onClick={toggleMenu}
                style={{
                  cursor: "pointer",
                  margin: "1rem",
                  fontSize: "1.5rem",
                }}
                icon={faTimes}
              />
            </div>
            <NavLink to="/">
              <img src={logo} alt="Vidican Raul Logo" />
            </NavLink>
          </div>
          <div id="span-line">
            <span />
          </div>
          <div className="side-menu">
            <div className="nav-list">
              <span
                onClick={() => {
                  toggleMenu();
                  window.scrollTo(0, chefRef.current.offsetTop);
                }}
                className="btn-about"
              >
                Chef
              </span>
              <span
                onClick={() => {
                  toggleMenu();
                  window.scrollTo(0, portfolioRef.current.offsetTop);
                }}
                className="btn-recipes"
              >
                Portofoliu
              </span>
              <span
                onClick={() => {
                  toggleMenu();
                  window.scrollTo(0, recenziiRef.current.offsetTop);
                }}
                className="btn-menu"
              >
                Recenzii
              </span>
              <span
                onClick={() => {
                  toggleMenu();
                  window.scrollTo(0, contactRef.current.offsetTop);
                }}
                className="btn-contact"
              >
                Contact
              </span>
              <Button
                onClick={() =>
                  (window.location.href =
                    "https://www.facebook.com/lapachet01/")
                }
                variant="outline-dark"
              >
                LaPachet
              </Button>
            </div>
          </div>
          <div id="span-line2">
            <span />
          </div>
          <div className="side-footer">
            <div className="footer-data">
              <p id="copy">&copy; Copyright {currentYear} | #ChefRaulVidican</p>
            </div>
          </div>
        </div>
      </Menu>
      <ArtCafe show={art} onHide={() => setArt(false)} />
      <CaeliaMamaia show={caelia} onHide={() => setCaelia(false)} />
      <RocaBruna show={roca} onHide={() => setRoca(false)} />
      <NukaCluj show={nuka} onHide={() => setNuka(false)} />
      <AtraPraova show={atra} onHide={() => setAtra(false)} />
      <VinSibiu show={sibiu} onHide={() => setSibiu(false)} />
      <RocaBrunaModal show={rocaModal} onHide={() => setRocaModal(false)} />
      <div id="page-wrapper">
        <span ref={homeRef} />
        <div className="main-nav">
          <div className="logo-area">
            <NavLink to="/">
              <img src={logo} alt="Vidican Raul Logo" />
            </NavLink>
          </div>
          <div className="main-menu">
            <div className="nav-list">
              <span
                onClick={() => window.scrollTo(0, chefRef.current.offsetTop)}
                className="btn-about"
              >
                Chef
              </span>
              <span
                onClick={() =>
                  window.scrollTo(0, portfolioRef.current.offsetTop)
                }
                className="btn-recipes"
              >
                Portofoliu
              </span>
              <span
                onClick={() =>
                  window.scrollTo(0, recenziiRef.current.offsetTop)
                }
                className="btn-menu"
              >
                Recenzii
              </span>
              <span
                onClick={() => window.scrollTo(0, contactRef.current.offsetTop)}
                className="btn-contact"
              >
                Contact
              </span>
              <Button
                onClick={() =>
                  (window.location.href =
                    "https://www.facebook.com/lapachet01/")
                }
                variant="outline-dark"
              >
                LaPachet
              </Button>
            </div>
            <FontAwesomeIcon onClick={() => setOpenNav(true)} icon={faBars} />
          </div>
        </div>
        <div className="home-wrapper">
          <div className="home-page">
            <HomeCarousel />
            <span ref={chefRef} />
            <div className="about-text">
              <div className="title-sep">
                <h1 id="meet2">Chef</h1>
                <span />
              </div>
              <p id="text">
                Bucătar şef la Roca Brună, Raul Vidican a lucrat câțiva ani în
                restaurante din Germania, perioadă în care a ajuns să se
                califice în semifinalele regionale ale competiției S. Pellegrino
                Young Chef 2018, concurând pentru regiunea Germania - Austria.
                <br />
                <br />
                Reîntors în țară, a colaborat cu mai multe restaurante din zona
                Transilvaniei, pentru ca anul trecut să se implice în{" "}
                <button
                  className="link-button"
                  onClick={() => setRocaModal(true)}
                >
                  Proiectul Roca Brună
                </button>
                .
              </p>
            </div>
          </div>
          <Parallax className="parallax2" bgImage={img1} strength={200}>
            <div id="img2" />
          </Parallax>
          <div ref={portfolioRef} className="title-sep">
            <h1 id="meet">Portofoliu</h1>
            <span />
          </div>
          <div className="posts">
            {arr.portfolios.map((obj) => (
              <Card key={obj.id}>
                <Card.Img
                  onClick={() => portFunc(obj.id)}
                  variant="top"
                  src={obj.src}
                  alt={obj.caption}
                />
                <Card.Body>
                  <Card.Title>{obj.title}</Card.Title>
                  <Card.Subtitle className="mb-2 mt-2 text-muted">
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> {obj.location}
                  </Card.Subtitle>
                  <Card.Text>{obj.text}</Card.Text>
                  <Button
                    onClick={() => portFunc(obj.id)}
                    variant="outline-dark"
                  >
                    Galerie
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
          <span ref={recenziiRef} />
          <Parallax className="parallax22" bgImage={end} strength={400}>
            <div id="img22" />
            <div className="title-sep2">
              <h1 id="meet">Recenzii</h1>
              <span />
            </div>
            <div className="reviews-page">
              <ReviewsCarousel />
            </div>
          </Parallax>
          <span ref={contactRef} />
          <div className="title-sep">
            <h1 id="meet">Contact</h1>
            <span />
          </div>
          <div className="contact-form">
            <h1>La serviciul dumneavoastră pentru evenimente și consultanță</h1>
            <p>
              <b>Email</b>: vidraul069@gmail.com
            </p>
            <p>
              <b>Tel</b>: 0751 988 273
            </p>
            <Form ref={formRef} validated={validated} onSubmit={handleSubmit}>
              <Form.Group controlId="ControlName1">
                <Form.Label>Nume</Form.Label>
                <Form.Control
                  required
                  value={name}
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Câmp obligatoriu.")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Numele dvs."
                />
              </Form.Group>
              <Form.Group controlId="ControlNumber1">
                <Form.Label>Telefon</Form.Label>
                <Form.Control
                  required
                  value={phone}
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      "Câmp obligatoriu. Să înceapă cu 07 şi să conţină în total 10 cifre."
                    )
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  pattern="^07+\d{8}$"
                  placeholder="07xx xxx xxx"
                />
              </Form.Group>
              <Form.Group controlId="ControlTextarea1">
                <Form.Label>Mesaj</Form.Label>
                <Form.Control
                  required
                  value={message}
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Câmp obligatoriu.")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  onChange={(e) => setMessage(e.target.value)}
                  as="textarea"
                  rows="3"
                  placeholder="Cu ce vă pot ajuta ?"
                />
              </Form.Group>
              {isSuccess ? (
                <Alert variant={"success"}>Mesajul a fost trimis.</Alert>
              ) : null}
              {isError ? (
                <Alert variant={"danger"}>Mesajul nu fost trimis.</Alert>
              ) : null}
              {isLoading ? (
                <Spinner size="lg" animation="border" />
              ) : (
                <Button
                  disabled={isLoading}
                  variant={"outline-dark"}
                  type="submit"
                >
                  Submit
                </Button>
              )}
            </Form>
          </div>
          <div className="footer">
            <div className="sm-icons">
              <a
                title="Pagină Facebook"
                id="fb"
                href="https://www.facebook.com/vidicanraul1/"
              >
                <FontAwesomeIcon icon={faFacebook} />
                <label>Facebook</label>
              </a>
              <a
                title="Pagină Instagram"
                id="ig"
                href="https://www.instagram.com/raul_vidican1/"
              >
                <FontAwesomeIcon icon={faInstagram} />
                <label>Instagram</label>
              </a>
            </div>
            <div className="footer-sep">
              <span />
            </div>
            <div className="footer-data">
              <p id="copy">&copy; Copyright {currentYear} | #ChefRaulVidican</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
