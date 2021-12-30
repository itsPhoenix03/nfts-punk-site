import React from "react";
import "../styles/CollectionCard.css";
import weth from "../assets/weth.png";

const CollectionCard = ({ id, image, name, description, price }) => {
  return (
    <div className="collectionCard">
      <img src={image} alt={name} className="collectionCardImage" />

      <div className="cardDetails">
        <h2 className="punkName">{name}</h2>
        <p className="nftId">#{++id}</p>
        <p className="description">'{description}'</p>

        <div className="cardPriceContainer">
          <img src={weth} alt="weth" className="eth-img" />
          <div className="cardPrice">{price}</div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
