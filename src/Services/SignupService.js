// import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchSignupAsync } from "../redux/action/action";

export const fetchData = async (user) => {
  // const response = await axios.post(
  //   "http://localhost:8000/api/v1/users/signup",
  //   user
  // );
  const dispatch = useDispatch();

  dispatch(fetchSignupAsync(user));
};
