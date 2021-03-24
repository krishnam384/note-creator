import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleError } from "../../reducer/action";
import { store } from "react-notifications-component";
import { Input } from "../../utils/input";
// import { validate } from "../../utils/validators";

// import { VALIDATOR_REQUIRE } from "../../utils/validators";

export default function Signup(props) {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    errorMessage: false,
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let targetName = e.target.name;
    let targetValue = e.target.value;

    setUser({ ...user, [targetName]: targetValue });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit button is Clicked..!!");

    axios
      .post("http://localhost:8000/api/v1/users/signup", user)
      .then((response) => {
        if (response.status === 200) {
          console.log("User signed up successfully");
          console.log(response);
          console.log(response.data.token);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("username", response.data.username);
          console.log(
            store.addNotification({
              title: "Successful..!!",
              message: "User Signed up Successfully..!!",
              type: "success",
              insert: "top",
              container: "top-right",
              animationIn: ["animate__animated", "animate__fadeIn"],
              animationOut: ["animate__animated", "animate__fadeOut"],
              dismiss: {
                duration: 2000,
                onScreen: true,
              },
            })
          );
          history.push("/home");
        }
      })
      .catch((e) => dispatch(handleError(e.message, props)));

    setUser({
      username: "",
      email: "",
      phone: "",
      password: "",
    });
  };

  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          type='email'
          error='Please Enter Valid Email ID'
          placeholder='Enter email'
          name='email'
          onChange={handleChange}
          autoFocus={true}
        />

        <Input
          type='text'
          placeholder='Enter Username'
          name='username'
          error='This Username is taken!'
          onChange={handleChange}
        />

        <Input
          type='text'
          placeholder='Enter Phone'
          name='phone'
          error='Phone number msut contain 10 Digits'
          onChange={handleChange}
        />

        <Input
          type='password'
          name='password'
          placeholder='Password'
          error='Password must contain atleast 5 Characters'
          onChange={handleChange}
          minLength={5}
        />

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
}
