import React from "react";
import { NavLink } from "react-router-dom";

/* FontAwesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

export default function Not() {
  return (
    <div className="not">
      <NavLink to="/" activeClassName="btn btn-outline-dark">
        Înapoi
      </NavLink>
      <FontAwesomeIcon icon={faExclamationTriangle} />
      <h2 id="not-found">Pagina nu a fost găsită</h2>
      <h2>{process.env.REACT_APP_TEST}</h2>
      <h2>6 cay</h2>
    </div>
  );
}
