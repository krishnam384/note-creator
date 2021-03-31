import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { handleError } from "../../redux/action/action";
// import { store } from "react-notifications-component";
import { Input } from "../../utils/input";
import { fetchSignupAsync } from "../../redux/action/action";
// import { fetchData } from "../../Services/SignupService";
import {
  emailValidation,
  passwordValidation,
  usernameValidation,
  phoneNumberValidation,
} from "../../utils/validators";
import "./Signup.css";

export default function Signup() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    errorMessage: false,
  });
  const state = useSelector((state) => state.SignupReducer);
  const [formValidationErrors, setFormValidationErrors] = useState({
    usernameError: "",
    emailError: "",
    phoneError: "",
    passwordError: "",
    errorMessage: false,
  });

  let signupFormValidationState = false;
  let FormErrors = {
    usernameError: "",
    emailError: "",
    phoneError: "",
    passwordError: "",
  };
  const [isError, setIsError] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  // const state = useSelector((state) => state.data);
  const handleChange = (e) => {
    let targetName = e.target.name;
    let targetValue = e.target.value;

    setUser({ ...user, [targetName]: targetValue });
  };

  const validateSignupForm = (user) => {
    FormErrors.emailError = emailValidation(user.email);
    FormErrors.passwordError = passwordValidation(user.password);
    FormErrors.usernameError = usernameValidation(user.username);
    FormErrors.phoneError = phoneNumberValidation(user.phone);

    console.log(FormErrors.emailError);
    if (FormErrors.emailError !== "" || FormErrors.passwordError !== "") {
      signupFormValidationState = true;
      setIsError(true);
    } else {
      signupFormValidationState = false;
      setIsError(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit button is Clicked..!!");
    console.log(user);
    validateSignupForm(user);
    setFormValidationErrors({ ...FormErrors });
    if (!signupFormValidationState) {
      console.log("Perform Fetch Operation");
      // fetchData(user);

      dispatch(fetchSignupAsync(user));
      // .then((res) => {
      //   console.log(res);
      //   localStorage.setItem("token", res.data.token);
      //   localStorage.setItem("username", res.data.username);

      //   history.push("/home");
      // })
      // .catch(() => dispatch(handleError(props)));
    }

    setUser({
      username: "",
      email: "",
      phone: "",
      password: "",
    });
  };

  useEffect(() => {
    console.log(state);
    if (state.data.status === 200) {
      localStorage.setItem("token", status.data.token);
      localStorage.setItem("username", status.data.username);
      history.push("/home");
    }
  }, [state]);
  return (
    <div className='signup-content'>
      {!state.isPending ? (
        <Form onSubmit={handleSubmit} className='signup-form'>
          <Input
            type='email'
            error={isError}
            errorType={formValidationErrors.emailError}
            placeholder='Enter email'
            name='email'
            onChange={handleChange}
            autoFocus={true}
          />

          <Input
            type='text'
            placeholder='Enter Username'
            name='username'
            error={isError}
            errorType={formValidationErrors.usernameError}
            onChange={handleChange}
          />

          <Input
            type='text'
            placeholder='Enter Phone'
            error={isError}
            errorType={formValidationErrors.phoneError}
            name='phone'
            onChange={handleChange}
          />

          <Input
            type='password'
            name='password'
            placeholder='Password'
            error={isError}
            errorType={formValidationErrors.passwordError}
            onChange={handleChange}
            minLength={5}
          />

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

// console.log(
//   store.addNotification({
//     title: "Successful..!!",
//     message: "User Signed up Successfully..!!",
//     type: "success",
//     insert: "top",
//     container: "top-right",
//     animationIn: ["animate__animated", "animate__fadeIn"],
//     animationOut: ["animate__animated", "animate__fadeOut"],
//     dismiss: {
//       duration: 2000,
//       onScreen: true,
//     },
//   })
// );
