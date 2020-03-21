import { ADD_TO_CART, REMOVE_FROM_CART, ADD_AUTH_USER } from "../constants";

export const addToCart = id => ({
  type: ADD_TO_CART,
  payload: id
});

export const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  payload: id
});

export const addAuthUser = user => ({
  type: ADD_AUTH_USER,
  payload: user
});

export const userLeave = () => {
  
}
