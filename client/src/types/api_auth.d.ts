import { SignInInitValues } from "./auth";
import { SuccessResponse } from "./response";

interface SignInApiParams extends SignInInitValues {}

interface ISignInResponse {
    token: string;
}

export type SignInResponse = SuccessResponse<ISignInResponse>;
