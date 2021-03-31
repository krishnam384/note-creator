import React from "react";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import Error from "../components/ErrorPages/Error";

export const Input = (props) => {
  return (
    <Form.Group>
      <Form.Control
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange}
        autoFocus={props.autoFocus}
      />
      {props.error ? <Error error={props.errorType} /> : ""}
    </Form.Group>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool,
  error: PropTypes.bool,
  errorType: PropTypes.string,
};
