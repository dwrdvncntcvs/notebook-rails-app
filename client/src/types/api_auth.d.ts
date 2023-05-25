import { SignInInitValues, SignUpInitValues } from "./auth";
import { SuccessResponse } from "./response";

interface SignInApiParams extends SignInInitValues {}

interface SignUpApiParams {
    user: SignUpInitValues;
}

interface ISignInResponse {
    token: string;
}

interface ISignUpResponse {
    user: SignUpInitValues;
}

export type SignInResponse = SuccessResponse<ISignInResponse>;

export type SignUpResponse = SuccessResponse<ISignUpResponse>;
