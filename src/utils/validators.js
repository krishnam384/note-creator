// const VALIDATOR_TYPE_REQUIRE = "REQUIRE";
// const VALIDATOR_TYPE_MINLENGTH = "MINLENGTH";
// const VALIDATOR_TYPE_MAXLENGTH = "MAXLENGTH";
// const VALIDATOR_TYPE_MIN = "MIN";
// const VALIDATOR_TYPE_MAX = "MAX";
// const VALIDATOR_TYPE_EMAIL = "EMAIL";
// const VALIDATOR_TYPE_FILE = "FILE";

// export const VALIDATOR_REQUIRE = () => ({ type: VALIDATOR_TYPE_REQUIRE });
// export const VALIDATOR_FILE = () => ({ type: VALIDATOR_TYPE_FILE });
// export const VALIDATOR_MINLENGTH = (val) => ({
//   type: VALIDATOR_TYPE_MINLENGTH,
//   val: val,
// });
// export const VALIDATOR_MAXLENGTH = (val) => ({
//   type: VALIDATOR_TYPE_MAXLENGTH,
//   val: val,
// });
// export const VALIDATOR_MIN = (val) => ({ type: VALIDATOR_TYPE_MIN, val: val });
// export const VALIDATOR_MAX = (val) => ({ type: VALIDATOR_TYPE_MAX, val: val });
// export const VALIDATOR_EMAIL = () => ({ type: VALIDATOR_TYPE_EMAIL });

// export const validate = (value, validators) => {
//   let isValid = true;
//   for (const validator of validators) {
//     console.log(validator);
//     if (validator.type === VALIDATOR_TYPE_REQUIRE) {
//       isValid = isValid && value.trim().length > 0;
//     }
//     if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
//       isValid = isValid && value.trim().length >= validator.val;
//     }
//     if (validator.type === VALIDATOR_TYPE_MAXLENGTH) {
//       isValid = isValid && value.trim().length <= validator.val;
//     }
//     if (validator.type === VALIDATOR_TYPE_MIN) {
//       isValid = isValid && +value >= validator.val;
//     }
//     if (validator.type === VALIDATOR_TYPE_MAX) {
//       isValid = isValid && +value <= validator.val;
//     }
//     if (validator.type === VALIDATOR_TYPE_EMAIL) {
//       isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
//     }
//   }
//   return isValid;
// };

// const emailValidation = (email) => {
//   console.log(email);
//   if (
//     /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
//       email
//     )
//   ) {
//     return "";
//   }
//   if (email.trim() === "") {
//     return "Email is required";
//   }
//   return "Please enter a valid email";
// };

// const passwordValidation = (password) => {
//   console.log(password);
//   if (password.trim() === "") {
//     return "Password is required";
//   }
//   if (password.length < 5) {
//     return "Password Must Containe atleast 5 Characters";
//   }
// };

// export const validate = ({ email, password }) => ({
//   email: emailValidation(email),
//   password: passwordValidation(password),
// });

export const emailValidation = (email) => {
  if (/^\S+@\S+\.\S+$/.test(email)) {
    console.log(email);
    return "";
  }
  if (email.trim() === "") {
    return "Email is required";
  }
  console.log("Valid Email");
  return "Please enter a valid email";
};

export const passwordValidation = (password) => {
  if (password.trim() === "") {
    return "Password is required";
  }
  if (password.length < 5) {
    return "Password Must contain atleast 5 Characters";
  }
  return "";
};

export const usernameValidation = (User) => {
  if (User.trim() === "") {
    return "User is required";
  }
  if (User.length < 5) {
    return "User Must contain atleast 5 Characters";
  }
  return "";
};

export const phoneNumberValidation = (phoneNumber) => {
  console.log(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(phoneNumber));
  if (phoneNumber.trim() === "") {
    return "Phone Number is required";
  }
  if (/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(phoneNumber)) {
    return "";
  } else {
    return "Please enter Valid Phone Number";
  }
};
