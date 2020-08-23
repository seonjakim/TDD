import { types } from "./types";
import axios from "axios";

export const fetchPost = () => async (dispatch) => {
  await axios
    .get("address")
    .then((res) => {
      dispatch({
        type: types.GET_POSTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
