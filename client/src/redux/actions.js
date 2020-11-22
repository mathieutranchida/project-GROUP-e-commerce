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
