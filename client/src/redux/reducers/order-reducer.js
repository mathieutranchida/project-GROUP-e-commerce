const initialState = {
  status: "idle",
  created_at: "",
  _id: "",
  customer_name: "",
  shipping_address: "",
  total_price: 0,
  total_quantity: 0,
  payment_information: {
    credit_card_number: "",
    expiration_date: "",
    name_on_credit_card: "",
    billing_address: "",
  },
  items: [
    {
      item_purchased_id: null,
      quantity: 0,
      price: 0,
      item: {
        name: "",
        price: "",
        body_location: "",
        category: "",
        _id: null,
        imageSrc: "...",
        numInStock: 0,
        companyId: null,
      },
    },
  ],
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_ORDER":
      return { ...state };
    default: {
      return state;
    }
  }
}
