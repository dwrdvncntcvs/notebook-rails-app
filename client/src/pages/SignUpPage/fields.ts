import { AuthField, SignUpInitValues } from "../../types/auth";

const signUpFields: AuthField[] = [
    {
        name: "first_name",
        placeholder: "Enter First Name",
        type: "text",
        label: "First Name",
    },
    {
        name: "last_name",
        placeholder: "Enter Last Name",
        type: "text",
        label: "Last Name",
    },
    {
        name: "username",
        placeholder: "Enter Username",
        type: "text",
        label: "Username",
    },
    {
        name: "email",
        placeholder: "Enter Email",
        type: "email",
        label: "Email",
    },
    {
        name: "password",
        placeholder: "Enter Password",
        type: "password",
        label: "Password",
    },
    {
        name: "password_check",
        placeholder: "Re-Type Password",
        type: "password",
        label: "Re-type Password",
    },
];

const initialValues: SignUpInitValues = {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    password_check: "",
};

export { signUpFields, initialValues };
