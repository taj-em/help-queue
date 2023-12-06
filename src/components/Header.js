import React from "react";
import ticketImage from "./../img/tickets-image.png"

function Header() {
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={ticketImage} alt="tickets" />
    </React.Fragment>
  );
}

export default Header;