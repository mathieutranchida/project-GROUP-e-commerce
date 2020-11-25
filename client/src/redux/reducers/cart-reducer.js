import { addCheddar} from '../../Money';

const initialState = {
  status: "idle",
  numberOfItems: 0,
  items: [],
  totalPrice: 0,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_CART":
      return {
        ...state,
        status: "requested",
      };
    case "RECEIVE_CART":
      return {
        ...state,
        status: "received",
        numberOfItems: action.cart.number_of_items,
        items: action.cart.items,
        totalPrice: action.cart.total_price,
      };
    case "ERROR_REQUEST_CART":
      return {
        ...state,
        status: "requested",
      };
    case "ADD_TO_CART":
      return {
        ...state,
        numberOfItems: state.numberOfItems + 1,
        items: [...state.items, { item: action.item, quantity: 1 }],
        totalPrice: addCheddar(state.totalPrice,parseFloat(action.item.price.slice(1)) )
      };
    default: {
      return state;
    }
  }
}
