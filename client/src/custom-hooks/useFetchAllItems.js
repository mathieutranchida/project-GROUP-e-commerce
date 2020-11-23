import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  requestAllItems,
  receiveAllItems,
  receiveAllItemsError,
} from "../redux/actions";

const useFetchAllItems = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestAllItems());
    fetch("/items", {
      method: "GET",
      headers: {
        "Content-Type": "application.json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(receiveAllItems(data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(receiveAllItemsError());
      });
  }, []);
};

export default useFetchAllItems;
