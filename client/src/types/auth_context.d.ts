import { SignInApiParams, SignUpApiParams } from "./api_auth";

export type SignInCtxMethod = (user: SignInApiParams) => Promise<void>;

export type SignUpCtxMethod = (userData: SignUpApiParams) => Promise<void>;

export interface IAuthContext {
    token: string;
    isAuth: boolean;
    signIn: SignInCtxMethod;
    signUp: SignUpCtxMethod;
}
