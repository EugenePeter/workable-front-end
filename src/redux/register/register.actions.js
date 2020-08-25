import { RegisterTypes } from "./register.types";

export const RegisterUserActionStart = (value) => ({
  type: RegisterTypes.REGISTER_USER_START,
  payload: value,
});

export const RegisterIsPosting = (value) => ({
  type: RegisterTypes.REGISTER_IS_POSTING,
  payload: value,
});

export const RegisterUserActionSuccess = (value) => ({
  type: RegisterTypes.REGISTER_USER_SUCCESS,
  payload: value,
});

export const RegisterUserActionFailure = (value) => ({
  type: RegisterTypes.REGISTER_USER_FAILURE,
  payload: value,
});

// export const RegisterPasswordActionStart = (value) => ({
//   type: RegisterTypes.REGISTER_PASSWORD_START,
//   payload: value
// });

