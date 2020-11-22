const initialState = {
  item: null,
  status: "loading",
  error: null,
};

export default function singleItemReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_SINGLE_ITEM": {
      return {
        ...state,
        status: "loading",
        item: null,
      };
    }
    case "RECEIVE_SINGLE_ITEM": {
      return {
        ...state,
        item: action.item,
        status: "idle",
      };
    }
    case "RECEIVE_SINGLE_ITEM_ERROR": {
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
