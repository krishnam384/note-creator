import React, { useRef, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { store } from "react-notifications-component";
// import axios from "axios";
// import { handleError } from "../../reducer/action";
import { emailValidation, passwordValidation } from "../../utils/validators";
import Error from "../ErrorPages/Error";
import "./Login.css";

export default function Login() {
  // const dispatch = useDispatch();
  // const history = useHistory();
  const emailFocus = useRef();

  // const token = localStorage.getItem("token");

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("Submit button is Clicked..!!");

  //   setError(validate(user));
  //   console.log(token);
  //   console.log(user);
  //   const headers = {
  //     "content-type": "application/json",
  //     Authorization: token,
  //   };

  //   axios
  //     .post("http://localhost:8000/api/v1/auth/login", user, {
  //       headers: headers,
  //     })
  //     .then((response) => {
  //       if (response.status === 200) {
  //         console.log("User Logged in successfully");
  //         console.log(response);

  //         console.log(
  //           store.addNotification({
  //             title: "Successful..!!",
  //             message: "User Logged in Successfully..!!",
  //             type: "success",
  //             insert: "top",
  //             container: "top-right",
  //             animationIn: ["animate__animated", "animate__fadeIn"],
  //             animationOut: ["animate__animated", "animate__fadeOut"],
  //             dismiss: {
  //               duration: 2000,
  //               onScreen: true,
  //             },
  //           })
  //         );
  //         history.push("/home");
  //       }
  //     })
  //     .catch((e) => dispatch(handleError(e.message, props)));
  // };

  // useEffect(() => {
  //   emailFocus.current.focus();
  //   console.log(error);
  // }, [error]);

  const [user, setUser] = useState({ email: "", password: "" });
  const [isError, setIsError] = useState(false);
  const [formValidationErrors, setFormValidationErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  let loginFormValidationState = false;
  let FormErrors = { emailError: "", passwordError: "" };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    validateLoginForm(user);
    setFormValidationErrors({ ...FormErrors });
    if (!loginFormValidationState) {
      console.log("Perform Fetch Operation");
    }
  };

  const validateLoginForm = (user) => {
    FormErrors.emailError = emailValidation(user.email);
    FormErrors.passwordError = passwordValidation(user.password);
    console.log(FormErrors.emailError);
    if (FormErrors.emailError !== "" || FormErrors.passwordError !== "") {
      loginFormValidationState = true;
      setIsError(true);
    } else {
      loginFormValidationState = false;
      setIsError(false);
    }
  };

  useEffect(() => {
    emailFocus.current.focus();
  }, []);

  return (
    <div className='login-content'>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            ref={emailFocus}
            name='email'
            value={user.email}
            placeholder='Enter email'
            onChange={handleChange}
            style={{ width: "300px" }}
          />
          {isError ? <Error error={formValidationErrors.emailError} /> : " "}
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            name='password'
            value={user.password}
            placeholder='Password'
            onChange={handleChange}
          />
          {isError ? <Error error={formValidationErrors.passwordError} /> : ""}
        </Form.Group>
        <Form.Group controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
        <p>Didn&apos;t create an account?</p>
        <Link to='/signup'>Signup</Link>
      </Form>
    </div>
  );
}
