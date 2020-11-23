const initialState = {
  items: null,
  status: "loading",
  error: null,
  itemsCopy: null,
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
        itemsCopy: action.items,
      };
    }
    case "RECEIVE_ALL_ITEMS_ERROR": {
      return {
        ...state,
        status: "error",
      };
    }
    case "FILTER_ITEMS": {
      return {
        ...state,
        items: {data : action.items},
      };
    }
    case "SHOW_ALL_ITEMS": {
      return {
        ...state,
        items: state.itemsCopy,
      };
    }
    
    default: {
      return state;
    }
  }
}
