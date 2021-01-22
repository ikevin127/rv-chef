import React, { useState } from "react";

/* Bootstrap & FontAwesome */
import { Button, Card, Modal, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

// Array & Images
import arr from "../array.json";
import img0 from "../img/parallax/img0.webp";
import img2 from "../img/parallax/img2.webp";
import img3 from "../img/parallax/img3.webp";

export function RocaBrunaModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onEnter={() =>
        (document.getElementById("html").style.overflow = "hidden")
      }
      onExit={() => (document.getElementById("html").style.overflow = "scroll")}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Proiectul Roca Brună
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://g.page/rocabruna-ro"
        >
          <FontAwesomeIcon aria-hidden="false" icon={faMapMarkerAlt} /> Roca
          Brună, Judeţul Arad
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
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{ borderRadius: 0 }}
          variant="outline-dark"
          onClick={props.onHide}
        >
          Închide
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export function ReviewsCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      interval={5000}
      controls={false}
      indicators={true}
      activeIndex={index}
      onSelect={handleSelect}
    >
      {arr.reviews.map((obj) => (
        <Carousel.Item key={obj.id}>
          <Card>
            <Card.Body>
              <Card.Text>
                „<i>{obj.text}</i>”
              </Card.Text>
              <span />
              <Card.Img
                width="200"
                height="200"
                variant="bottom"
                src={obj.src}
                alt={obj.name}
              />
              <Card.Subtitle className="mt-2 text-muted">
                {obj.name}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export function HomeCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      interval={5000}
      controls={false}
      indicators={true}
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item>
        <img
          width="1364"
          height="1384"
          className="carousel-img"
          src={img3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Raul Vidican</h3>
          <p>
            Semifinalist
            <br />
            S. Pellegrino Young Chef 2018 <br /> Next Chef Award 2017
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          width="2456"
          height="3070"
          className="carousel-img"
          src={img0}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Atenţie la detalii</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          width="2000"
          height="3000"
          className="carousel-img"
          src={img2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Pasiune</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
