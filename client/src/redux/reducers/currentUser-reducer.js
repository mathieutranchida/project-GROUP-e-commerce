const initialState = {
  name: "John Smith",
  status: "Logged in",
};

export default function currentUserReducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
