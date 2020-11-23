// Fetch items for the main page
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

// Fetch a single item for the product page (Not used yet - might be used in the future)
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

export const filterItems = (items) => ({
  type: "FILTER_ITEMS",
  items,
});

export const showAllItems = () => ({
  type: "SHOW_ALL_ITEMS",
});
