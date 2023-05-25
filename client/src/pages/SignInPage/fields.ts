import { AuthField, SignInInitValues } from "../../types/auth";

const signInFields: AuthField[] = [
    {
        name: "username",
        placeholder: "Enter Username",
        type: "text",
        label: "Username",
    },
    {
        name: "password",
        placeholder: "Enter Password",
        type: "password",
        label: "Password",
    },
];

const initialValues: SignInInitValues = {
    username: "",
    password: "",
};

export { signInFields, initialValues };
