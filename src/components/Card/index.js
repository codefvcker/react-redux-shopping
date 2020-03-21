import React from "react";
import "./Card.scss";

export const Card = ({
  name,
  price,
  img,
  addToCart,
  id,
  inCart,
  removeFromCart
}) => {
  return (
    <div className="card">
      <div className="card__image-wrap">
        <img className="card__image" src={img} alt="item" />
      </div>
      <div className="card__content-wrap">
        <div className="card_content">
          <div className="card__name">{name}</div>
          <div className="card__price">{price}</div>
        </div>
        {inCart ? (
          <button
            onClick={() => {
              removeFromCart(id);
            }}
          >
            Remove from cart
          </button>
        ) : (
          <button
            onClick={() => {
              addToCart(id);
            }}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};
