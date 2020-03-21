import { ADD_TO_CART, REMOVE_FROM_CART, ADD_AUTH_USER } from "../constants";

const initState = {
  user: null,
  cards: [
    {
      id: 1,
      name: "Hoodie 1",
      price: "$20",
      img:
        "https://cdn.shopify.com/s/files/1/0044/1899/4210/products/ecaa62725bc3452aa5695f2fc7ac6e1e_1500x.jpg?v=1554995270",
      incart: false
    },
    {
      id: 2,
      name: "Hoodie 2",
      price: "$20",
      img:
        "https://cdn.shopify.com/s/files/1/0044/1899/4210/products/ecaa62725bc3452aa5695f2fc7ac6e1e_1500x.jpg?v=1554995270",
      incart: false
    },
    {
      id: 3,
      name: "Hoodie 3",
      price: "$20",
      img:
        "https://cdn.shopify.com/s/files/1/0044/1899/4210/products/ecaa62725bc3452aa5695f2fc7ac6e1e_1500x.jpg?v=1554995270",
      incart: false
    },
    {
      id: 4,
      name: "Hoodie 4",
      price: "$20",
      img:
        "https://cdn.shopify.com/s/files/1/0044/1899/4210/products/ecaa62725bc3452aa5695f2fc7ac6e1e_1500x.jpg?v=1554995270",
      incart: false
    }
  ]
  // cart: []
};

export const shopReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cards: state.cards.map(item => {
          if (item.id === action.payload) {
            item.incart = true;
          }
          return item;
        })
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cards: state.cards.map(item => {
          if (item.id === action.payload) {
            item.incart = false;
          }
          return item;
        })
      };
    case ADD_AUTH_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
