import React from "react";
import "./BurgerMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCat } from "@fortawesome/free-solid-svg-icons";
import catIconLight from "../../assets/Images/catIconLight.png";
import catBurgerLight from "../../assets/Images/catBurgerLight.png";
import ShopItem from "../ShopItem/ShopItem";

function BurgerMenu({
  handleBurgerClick,
  burgerState,
  catSavings,
  setCatSavings,
  setCatMultiplier,
  setCatsPS,
}) {
  const handleBuyItem = (price, multiplierIncrease, itemType) => {
    {
      if (catSavings >= price) {
        if (itemType === "clickItem") {
          setCatMultiplier((prev) => prev + multiplierIncrease);
        } else if (itemType === "autoItem") {
          setCatsPS((prev) => prev + multiplierIncrease);
        }

        setCatSavings((prev) => prev - price);
      }
    }
  };

  return (
    <div
      className="burger-wrapper noSelect"
      style={burgerState ? { display: "block" } : { display: "none" }}
    >
      <div className="burger-banner">
        <img
          src={catBurgerLight}
          className="burger-banner-bars"
          onClick={handleBurgerClick}
        />
        <div className="catSavings">
          <img src={catIconLight} className="banner-icon" />
          <h1>{catSavings} cats</h1>
        </div>
      </div>

      <h1 className="shop-title">Flea Market</h1>

      <div className="burger-shop-items">
        <ShopItem
          handleBuyItem={handleBuyItem}
          item={"Catnip"}
          itemType={"clickItem"}
          price={10}
          rate={1}
        />
        <ShopItem
          handleBuyItem={handleBuyItem}
          item={"Lasagna"}
          itemType={"clickItem"}
          price={200}
          rate={5}
        />
        <ShopItem
          handleBuyItem={handleBuyItem}
          item={"Cat Toys"}
          itemType={"autoItem"}
          price={1000}
          rate={30}
        />
        <ShopItem
          handleBuyItem={handleBuyItem}
          item={"Cat Robot"}
          itemType={"autoItem"}
          price={3500}
          rate={100}
        />
        <ShopItem
          handleBuyItem={handleBuyItem}
          item={"Cat College"}
          itemType={"autoItem"}
          price={7000}
          rate={300}
        />
        <ShopItem
          handleBuyItem={handleBuyItem}
          item={"Cat Robots "}
          itemType={"autoItem"}
          price={20000}
          rate={1000}
        />
        <ShopItem
          handleBuyItem={handleBuyItem}
          item={"Cat Robots "}
          itemType={"autoItem"}
          price={500000}
          rate={5000}
        />
      </div>
    </div>
  );
}

export default BurgerMenu;

// turn shop items into components
