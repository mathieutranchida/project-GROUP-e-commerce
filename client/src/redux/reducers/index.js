import { combineReducers } from "redux";

import cart from "./cart-reducer";
import order from "./order-reducer";
import currentUser from "./currentUser-reducer";
import items from "./items-reducer";
import singleItem from "./single-item-reducer";
import createUser from "./createUser-reducer";

export default combineReducers({
  cart,
  order,
  currentUser,
  items,
  singleItem,
  createUser,
});
