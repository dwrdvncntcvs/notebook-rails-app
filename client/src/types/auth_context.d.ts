import { SignInApiParams } from "./api_auth";

export type SignInCtxMethod = (user: SignInApiParams) => Promise<void>;

export interface IAuthContext {
    token: string;
    isAuth: boolean;
    signIn: SignInCtxMethod;
}
