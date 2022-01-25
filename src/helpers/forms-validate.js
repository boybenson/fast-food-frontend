export const signInFormValidate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Email Is Required!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Password Is Required!";
  }
  return errors;
};
