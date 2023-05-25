import { NavLink } from "react-router-dom";
import { AuthForm } from "../../components/Auth";
import { SignInInitValues } from "../../types/auth";
import { initialValues, signInFields } from "./fields";
import { AuthContainer } from "../../layouts";
import { useAuth } from "../../context/Auth";

const SignInPage = () => {
    const { signIn } = useAuth();

    const submitHandler = async (values: SignInInitValues) => {
        console.log("Values: ", values);
        await signIn(values);
    };

    return (
        <AuthContainer>
            <h1>Sign In</h1>
            <AuthForm
                fields={signInFields}
                initialValues={initialValues}
                buttonLabel="Sign In"
                submitHandler={submitHandler}
            />
            <p>
                Doesn't have an account?{" "}
                <NavLink to="/sign-up">Click Here</NavLink>
            </p>
        </AuthContainer>
    );
};

export default SignInPage;
