import { ERROR } from "../../action/action";
// import { useHistory } from "react-router-dom";

const initialState = {
  code: "Not set",
  message: "Something went wrong",
};

export const HandleErrorReducer = (state = initialState, action) => {
  // const history = useHistory();
  //   const handleUnknownError = (error) => {
  //   history.push("/500");
  //     return { code: 500, message: error };
  //   };
  switch (action.type) {
    case ERROR:
      console.log("initial State");
      console.log(action.props);
      action.props.history.push("/errorPages");
      return { message: "Network Error" };

    default:
      return state;
  }
};
