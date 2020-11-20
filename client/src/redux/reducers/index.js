import { combineReducers } from "redux";

import cart from "./cart-reducer";
import order from "./order-reducer";
import currentUser from "./currentUser-reducer";
import items from "./items-reducer";

export default combineReducers({ cart, order, currentUser, items });
