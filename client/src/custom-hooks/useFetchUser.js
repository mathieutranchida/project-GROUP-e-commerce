import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  requestSingleAccount,
  receiveSingleAccount,
  receiveaSingleAccountError,
} from "../redux/actions";

const useFetchUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedin");
    if (isLoggedIn === "true") {
      dispatch(requestSingleAccount());
      fetch("/account/mt@gmail.com", {
        method: "GET",
        headers: {
          "Content-Type": "application.json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          dispatch(receiveSingleAccount(data.data));
          localStorage.setItem("isLoggedin", true);
          localStorage.setItem("email", data.data.email);
        })
        .catch((err) => {
          console.log(err);
          dispatch(receiveaSingleAccountError());
        });
    }
  }, []);
};

export default useFetchUser;
