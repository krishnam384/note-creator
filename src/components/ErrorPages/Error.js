import React from "react";
import PropTypes from "prop-types";

export default function Error({ error }) {
  return <small style={{ color: "red" }}>{error}</small>;
}

Error.propTypes = {
  error: PropTypes.string,
};
