import { IUserRequest } from "../interfaces/user.interface";
import { SchemaOf } from "yup";
import * as yup from "yup";

const userSchema: SchemaOf<IUserRequest> = yup.object().shape({
  username: yup
    .string()
    .required("Username required")
    .min(3, "Username must contain at least 3 characters"),
  password: yup
    .string()
    .required("Password required")
    .min(8, "Password must contain at least 8 characters")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
      "The password must contain capital letters and numbers!"
    ),
});

export { userSchema };
