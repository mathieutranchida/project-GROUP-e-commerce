const initialState = {
  name: "",
  email: "",
  password: "",
  address_line_1: "",
  address_line_2: "",
};

export default function createUserReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_ACCOUNT_NAME": {
      return {
        ...state,
        name: action.data,
      };
    }
    case "UPDATE_ACCOUNT_EMAIL": {
      return {
        ...state,
        email: action.data,
      };
    }
    case "UPDATE_ACCOUNT_PASSWORD": {
      return {
        ...state,
        password: action.data,
      };
    }
    case "UPDATE_ACCOUNT_ADDRESS_LINE_1": {
      return {
        ...state,
        address_line_1: action.data,
      };
    }
    case "UPDATE_ACCOUNT_ADDRESS_LINE_2": {
      return {
        ...state,
        address_line_2: action.data,
      };
    }
    default: {
      return state;
    }
  }
}
