import React, { Component } from "react";

const img4 = "https://wallpapersmug.com/large/930962/vegetables-fresh.jpg";

class Not extends Component {
  render() {
    return (
      <>
        <div className="not">
          <span id="darken"></span>
          <img id="not-img" src={img4} alt="Fundal legume" />
          <h2 id="not-found">Pagina nu a fost găsită</h2>
        </div>
      </>
    );
  }
}

export default Not;
