import React from "react";

function ShopItem({ handleBuyItem, item, itemType, price, rate }) {
  return (
    <div
      className="shop-item"
      onClick={() => handleBuyItem(price, rate, itemType)}
    >
      <div className="item-name-price">
        <h1>{item}</h1>
        <h3>{price + " cats"}</h3>
      </div>
      <p>
        {rate + ` cats per ${itemType === "clickItem" ? "click" : "second"}`}
      </p>
    </div>
  );
}

export default ShopItem;
