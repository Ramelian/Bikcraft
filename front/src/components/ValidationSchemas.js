export const nameValidationSchema = {
    required: "This input is required",
    minLength: {
      value: 2,
      message: "Input should have a minimum of 2 characters",
    },
    maxLength: {
      value: 20,
      message: "Input should have a maximum of 20 characters",
    },
  };

  export const phoneValidationSchema = {
    required: "Phone number is required",
    pattern: {
      value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      message: "Invalid phone number",
    },
  };

  export const emailValidationSchema = {
    required: 'Email is required',
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Invalid email format'
    }
  };

  export const numberValidationSchema = {
    required: 'Number is required',
    maxLength: {
      value: 10,
      message: 'Number should have a maximum of 10 digits'
    },
    pattern: {
      value: /^\d+$/,
      message: 'Invalid number format'
    }
  };