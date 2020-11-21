const initialState = {
  items: null,
  status: "loading",
  error: null,
};

export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_ALL_ITEMS": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "RECEIVE_ALL_ITEMS": {
      return {
        ...state,
        items: action.items,
        status: "idle",
      };
    }
    case "RECEIVE_ALL_ITEMS_ERROR": {
      return {
        ...state,
        status: "error",
      };
    }
    default: {
      return state;
    }
  }
}
