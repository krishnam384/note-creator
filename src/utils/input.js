import React from "react";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

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
      <Form.Text className='text-muted'>{props.error}</Form.Text>
    </Form.Group>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool,
  error: PropTypes.string,
};
