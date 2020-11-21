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
