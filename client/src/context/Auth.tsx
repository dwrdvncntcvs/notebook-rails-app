import {
    FC,
    PropsWithChildren,
    createContext,
    useContext,
    useState,
} from "react";
import { SignInApiParams, SignUpApiParams } from "../types/api_auth";
import {
    IAuthContext,
    SignInCtxMethod,
    SignUpCtxMethod,
} from "../types/auth_context";
import { signInApi, signUpApi } from "../api/auth";

const AuthContext = createContext<IAuthContext>({
    token: "",
    isAuth: false,
    signIn: async (_user: SignInApiParams) => {},
    signUp: async (_userData: SignUpApiParams) => {},
});

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
    const [token, setToken] = useState("");

    const signIn: SignInCtxMethod = async (user: SignInApiParams) => {
        try {
            const response = await signInApi(user);
            console.log(response);
            setToken(response.data.token);
        } catch (err) {
            console.log(err);
        }
    };

    const signUp: SignUpCtxMethod = async (userData: SignUpApiParams) => {
        try {
            const response = await signUpApi(userData);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <AuthContext.Provider
            value={{ signIn, token, isAuth: !!token, signUp }}
        >
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { AuthContext, AuthProvider, useAuth };
