const initialState = {
  account: null,
  status: "idle",
  error: null,
};

export default function currentUserReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_SINGLE_ACCOUNT": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "RECEIVE_SINGLE_ACCOUNT": {
      console.log(action.account);
      return {
        ...state,
        account: action.account,
        status: "logged in",
      };
    }
    case "RECEIVE_SINGLE_ACCOUNT_ERROR": {
      return {
        ...state,
        status: "email not found",
      };
    }
    case "SET_BACK_TO_DEFAULT": {
      return {
        ...state,
        account: null,
        status: "idle",
        error: null,
      };
    }
    default: {
      return state;
    }
  }
}
