import React, { useEffect } from "react";
import { Card } from "../../components";
import { connect } from "react-redux";
import fire from "../../config/fire";
import {
  addToCart,
  removeFromCart,
  addAuthUser
} from "../../store/actions/actionCreators";
import "./Main.scss";

export const Main = ({
  addToCart,
  removeFromCart,
  cards,
  addAuthUser,
  user
}) => {
  const renderCards = cards =>
    cards.map(card => (
      <Card
        key={card.id}
        img={card.img}
        name={card.name}
        price={card.price}
        id={card.id}
        inCart={card.incart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    ));

  useEffect(() => {
    fire.auth().onAuthStateChanged(addAuthUser);
  }, []);

  return (
    <div className="main">
      <div className="main__content">{renderCards(cards)}</div>
    </div>
  );
};

export default connect(
  ({ shopReducer }) => ({
    user: shopReducer.user,
    cards: shopReducer.cards
  }),
  { addToCart, removeFromCart, addAuthUser }
)(Main);
