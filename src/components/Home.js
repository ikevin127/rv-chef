import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

/* Bootstrap & FontAwesome */
import { Button, Card } from "react-bootstrap";
import ModalBS from "react-bootstrap/Modal";
import CarouselBS from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faBars } from "@fortawesome/free-solid-svg-icons";

// Parallax
import { Parallax } from "react-parallax";

// Axios
// import axios from "axios";

// Array & Images
import arr from "../array.json";
import logo from "../img/rv.png";
import img0 from "../img/parallax/img0.jpg";
import img1 from "../img/parallax/img1.jpg";
import img2 from "../img/parallax/img2.jpg";
import img3 from "../img/parallax/img3.jpg";

function RocaBrunaModal(props) {
  return (
    <ModalBS
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalBS.Header closeButton>
        <ModalBS.Title id="contained-modal-title-vcenter">
          Proiectul Roca Brună
        </ModalBS.Title>
      </ModalBS.Header>
      <ModalBS.Body>
        <a href="https://goo.gl/maps/X441FnwtHkvcY7qy6">
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Judeţul Arad, Comuna Păuliş
        </a>
        <br />
        <br />
        <p>
          <i>
            „Roca Brună este unul din motivele întoarcerii mele în țară,
            discutam cu Dan despre acest proiect încă de când lucram în
            Germania. Nu am stat prea mult pe gânduri să mă alătur, pentru că
            este un restaurant exact cum îmi doresc și este acasă. Este tot ce
            aveam nevoie.
            <br />
            <br />
            Meniul restaurantului este destul de simplu: se schimbă în funcție
            de sezon și ținem cont de ce putem achiziționa de la producătorii
            locali. Încet, încet am început să dezvoltăm mai mult meniul, să
            oferim clienților diverse combinații de mâncare, mai altfel.
            <br />
            <br />
            Un astfel de exemplu este preparatul realizat din piept și pulpe de
            rață gătite confit, trase apoi într-o crustă de panko, servite cu
            piure de migdale, ciuperci la tigaie și o cremă de vișine.”
          </i>{" "}
          povestește Raul.
        </p>
      </ModalBS.Body>
      <ModalBS.Footer>
        <Button
          style={{ borderRadius: 0 }}
          variant="outline-dark"
          onClick={props.onHide}
        >
          Închide
        </Button>
      </ModalBS.Footer>
    </ModalBS>
  );
}

function ReviewsCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <CarouselBS
      interval={5000}
      controls={false}
      indicators={true}
      activeIndex={index}
      onSelect={handleSelect}
    >
      {arr.reviews.map((obj) => (
        <CarouselBS.Item key={obj.id}>
          <Card>
            <Card.Body>
              <Card.Text>
                „<i>{obj.text}</i>”
              </Card.Text>
              <span />
              <Card.Img variant="bottom" src={obj.src} alt={obj.name} />
              <Card.Subtitle className="mt-2 text-muted">
                {obj.name}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </CarouselBS.Item>
      ))}
    </CarouselBS>
  );
}

function HomeCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <CarouselBS
      interval={5000}
      controls={false}
      indicators={true}
      activeIndex={index}
      onSelect={handleSelect}
    >
      <CarouselBS.Item>
        <img className="carousel-img" src={img1} alt="First slide" />
        <CarouselBS.Caption>
          <h3>Raul Vidican</h3>
          <span />
          <p>
            Semifinalist competiţia S. Pellegrino Young Chef 2018, regiunea
            Germania - Austria.
          </p>
        </CarouselBS.Caption>
      </CarouselBS.Item>
      <CarouselBS.Item>
        <img className="carousel-img" src={img0} alt="Second slide" />
        <CarouselBS.Caption>
          <h3>Atenţie la detalii</h3>
          <span />
        </CarouselBS.Caption>
      </CarouselBS.Item>
      <CarouselBS.Item>
        <img className="carousel-img" src={img2} alt="Third slide" />
        <CarouselBS.Caption>
          <h3>Pasiune</h3>
          <span />
        </CarouselBS.Caption>
      </CarouselBS.Item>
    </CarouselBS>
  );
}

export default function Home() {
  // State
  // const [isTop, setIsTop] = useState(true);
  const [modalShow, setModalShow] = useState(false);

  // Refs
  const homeRef = useRef();
  const chefRef = useRef();
  const portfolioRef = useRef();
  const recenziiRef = useRef();
  const contactRef = useRef();

  // Variables
  const history = useHistory();
  let currentYear = new Date().getFullYear();

  const portFunc = (id) => {
    switch (id) {
      case 4:
        return history.push("/sibiu");
      case 6:
        return history.push("/nuka");
      case 8:
        return history.push("/atra");
      case 9:
        return history.push("/art-cafe");
      default:
        return null;
    }
  };

  // useEffect(() => {
  //   // let listener = document.addEventListener("scroll", (e) => {
  //   //   const Top = window.scrollY < 100;
  //   //   if (Top !== isTop) {
  //   //     setIsTop(Top);
  //   //   }
  //   // });
  //   // return () => {
  //   //   document.removeEventListener("scroll", listener);
  //   // };
  // }, [isTop]);

  return (
    <>
      <RocaBrunaModal show={modalShow} onHide={() => setModalShow(false)} />
      <span ref={homeRef}></span>
      <div className="main-nav">
        <div className="logo-area">
          <img src={logo} alt="Vidican Raul Logo" />
        </div>
        <div className="main-menu">
          <ul className="nav-list">
            <span
              onClick={() => window.scrollTo(0, chefRef.current.offsetTop)}
              className="btn-about"
            >
              Chef
            </span>
            <span
              onClick={() => window.scrollTo(0, portfolioRef.current.offsetTop)}
              className="btn-recipes"
            >
              Portofoliu
            </span>
            <span
              onClick={() => window.scrollTo(0, recenziiRef.current.offsetTop)}
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
                (window.location.href = "https://www.facebook.com/lapachet01/")
              }
              variant="outline-dark"
            >
              LaPachet
            </Button>

            <a id="fb" href="https://www.facebook.com/vidicanraul1/">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a id="ig" href="https://www.instagram.com/raul_vidican1/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </ul>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      <div className="home-wrapper">
        <div className="home-page">
          <HomeCarousel />
          <div ref={chefRef} className="about-text">
            <div className="title-sep">
              <h1 id="meet">Chef</h1>
              <span />
            </div>
            <p id="text">
              Bucătar şef la Roca Brună, Raul Vidican a lucrat câțiva ani în
              restaurante din Germania, perioadă în care a ajuns să se califice
              în semifinalele regionale ale competiției S. Pellegrino Young Chef
              2018, concurând pentru regiunea Germania - Austria.
              <br />
              <br />
              Reîntors în țară, a colaborat cu mai multe restaurante din zona
              Transilvaniei, pentru ca anul trecut să se implice în{" "}
              <button
                className="link-button"
                onClick={() => setModalShow(true)}
              >
                Proiectul Roca Brună
              </button>
              .
            </p>
          </div>
        </div>
        <Parallax className="parallax2" bgImage={img3} strength={700}>
          <div id="img2" />
        </Parallax>
        <div ref={portfolioRef} className="posts">
          {arr.portfolios.map((obj) => (
            <Card key={obj.id}>
              <Card.Img
                onClick={() => portFunc(obj.id)}
                variant="top"
                src={obj.src}
                alt={obj.title}
              />
              <Card.Body>
                <Card.Title>{obj.title}</Card.Title>
                <Card.Subtitle className="mb-2 mt-2 text-muted">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> {obj.location}
                </Card.Subtitle>
                <Card.Text>{obj.text}</Card.Text>
                <Button onClick={() => portFunc(obj.id)} variant="outline-dark">
                  Galerie
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
        <span ref={recenziiRef}></span>
        <div className="reviews-page">
          <ReviewsCarousel />
        </div>
        <div ref={contactRef} className="contact-form">
          <h1>La serviciul dumneavoastră</h1>
          <p>Tel: 0751 988 273</p>
          <span id="line"></span>
          <form>CONTACT FORM</form>
        </div>
        <div className="footer">
          <div className="footer-data">
            <h1>#ChefRaulVidican</h1>
            <p id="contact-data">Tel: 0751 988 273</p>
            <p id="copy">RaulVidican.ro &copy; Copyright {currentYear}</p>
          </div>
        </div>
      </div>
    </>
  );
}
