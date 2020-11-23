export const requestAllItems = () => ({
  type: "REQUEST_ALL_ITEMS",
});

export const receiveAllItems = (items) => ({
  type: "RECEIVE_ALL_ITEMS",
  items,
});

export const receiveAllItemsError = () => ({
  type: "RECEIVE_ALL_ITEMS_ERROR",
});

export const requestSingleItem = () => ({
  type: "REQUEST_SINGLE_ITEM",
});

export const receiveSingleItem = (item) => ({
  type: "RECEIVE_SINGLE_ITEM",
  item,
});

export const receiveSingleItemError = () => ({
  type: "RECEIVE_SINGLE_ITEM_ERROR",
});

//Cart Actions
export const requestCart = () => ({
  type: "REQUEST_CART",
});

export const receiveCart = (cart) => ({
  type: "RECEIVE_CART",
  cart,
});

export const errorRequestCart = () => ({
  type: "ERROR_REQUEST_CART",
});

export const addToCart = (item) => ({
  type: "ADD_TO_CART",
  item,
});
