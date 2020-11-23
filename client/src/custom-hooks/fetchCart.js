import { useDispatch } from "react-redux";
import React from "react";
import { errorRequestCart, receiveCart, requestCart } from "../redux/actions";

const useFetchCart = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(requestCart());
    fetch("/cart")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        dispatch(receiveCart(json.data));
      })
      .catch(() => {
        dispatch(errorRequestCart());
      });
  });
};

export default useFetchCart;
