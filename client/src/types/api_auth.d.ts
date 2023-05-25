import { SignInInitValues } from "./auth";
import { SuccessResponse } from "./response";

interface SignInApiParams {
    user: SignInInitValues;
}

interface ISignInResponse {
    data: {
        token: string;
    };
}

export type SignInResponse = SuccessResponse<ISignInResponse> 
