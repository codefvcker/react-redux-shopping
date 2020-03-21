import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/actionCreators";
import { Card } from "../../components";
import "./Cart.scss";

const Cart = ({ cards, removeFromCart }) => {
  const renderCards = cards =>
    cards.map((card, index) => {
      if (card.incart) {
        return (
          <Card
            key={card.id + card.index + card.name}
            img={card.img}
            name={card.name}
            price={card.price}
            id={card.id}
            addToCart="null"
            inCart={true}
            removeFromCart={removeFromCart}
          />
        );
      }
      return null;
    });

  return (
    <div className="cart">
      <div className="cart__content">{renderCards(cards)}</div>
    </div>
  );
};

export default connect(
  ({ shopReducer }) => ({
    cards: shopReducer.cards
  }),
  { removeFromCart }
)(Cart);
