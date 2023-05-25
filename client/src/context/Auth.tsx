import {
    FC,
    PropsWithChildren,
    createContext,
    useContext,
    useState,
} from "react";
import { SignInApiParams } from "../types/api_auth";
import { IAuthContext, SignInCtxMethod } from "../types/auth_context";
import { signInApi } from "../api/auth";

const AuthContext = createContext<IAuthContext>({
    token: "",
    isAuth: false,
    signIn: async (user: SignInApiParams) => {},
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

    return (
        <AuthContext.Provider value={{ signIn, token, isAuth: !!token }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { AuthContext, AuthProvider, useAuth };
