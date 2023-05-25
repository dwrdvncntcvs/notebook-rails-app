import { NavLink } from "react-router-dom";
import { AuthForm } from "../../components/Auth";
import { SignUpInitValues } from "../../types/auth";
import { initialValues, signUpFields } from "./fields";
import { AuthContainer } from "../../layouts";

const SignUpPage = () => {
    const submitHandler = (values: SignUpInitValues) => {
        console.log("Values: ", values);
    };

    return (
        <AuthContainer>
            <h1>Sign Up</h1>
            <AuthForm
                fields={signUpFields}
                initialValues={initialValues}
                submitHandler={submitHandler}
                buttonLabel="Sign Up"
            />
            <p>
                Already have an account?{" "}
                <NavLink to="/sign-in">Click Here</NavLink>
            </p>
        </AuthContainer>
    );
};

export default SignUpPage;
