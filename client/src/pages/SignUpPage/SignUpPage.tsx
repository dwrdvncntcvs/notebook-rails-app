import { NavLink } from "react-router-dom";
import { AuthForm } from "../../components/Auth";
import { SignUpInitValues } from "../../types/auth";
import { initialValues, signUpFields } from "./fields";
import { AuthContainer } from "../../layouts";
import { useAuth } from "../../context/Auth";

const SignUpPage = () => {
    const { signUp } = useAuth();

    const submitHandler = async (values: SignUpInitValues) => {
        console.log("Values: ", values);
        await signUp({ user: values }); 
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
