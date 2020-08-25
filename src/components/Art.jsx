import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import arr from "../array.json";

import { NavLink } from "react-router-dom";
/* Bootstrap & FontAwesome */
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareLeft } from "@fortawesome/free-solid-svg-icons";

export default function Art() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  let Art = arr.artcafe.map((obj) => ({
    key: obj.id,
    src: obj.src,
    width: obj.width,
    height: obj.height,
    title: obj.title,
  }));

  return (
    <>
      <NavLink className="back-button" to="/">
        <Button variant="outline-light">
          <FontAwesomeIcon icon={faCaretSquareLeft} /> Înapoi
        </Button>
      </NavLink>
      <Gallery photos={Art} margin={1} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox} closeOnBackdropClick={true}>
            <Carousel
              currentIndex={currentImage}
              views={Art.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  );
}
