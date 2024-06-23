import React from "react";
import "./Banner.css";
import { faCat, faBars, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import catBurgerDark from "../../assets/Images/catBurgerDark.png";
import catIconDark from "../../assets/Images/catIconDark.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Banner({ catSavings, handleBurgerClick }) {
  return (
    <div className="banner noSelect">
      <img
        src={catBurgerDark}
        className="banner-icon"
        id="shop-burger"
        onClick={handleBurgerClick}
      />
      <div className="cat-savings">
        <img src={catIconDark} className="banner-icon" />
        <h1>{catSavings} cats</h1>
      </div>
      <div className="quiz-icon">
        <FontAwesomeIcon icon={faLightbulb} />
      </div>
    </div>
  );
}

export default Banner;
