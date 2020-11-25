import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  requestSingleAccount,
  receiveSingleAccount,
  receiveaSingleAccountError,
} from "../redux/actions";

const useFetchUser = () => {
  const dispatch = useDispatch();

  const email = useSelector(
    (state) => state.currentUser.account && state.currentUser.account.email
  );

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn && email) {
      dispatch(requestSingleAccount());
      fetch(`/account/${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch(receiveSingleAccount(data.data));
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("email", data.data.email);
        })
        .catch((err) => {
          console.log(err);
          dispatch(receiveaSingleAccountError());
        });
    }
  }, [email]);
};

export default useFetchUser;
