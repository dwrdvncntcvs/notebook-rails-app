import { axiosClient } from ".";
import {
    SignInApiParams,
    SignInResponse,
    SignUpApiParams,
    SignUpResponse,
} from "../types/api_auth";
import { ErrorResponse } from "../types/response";

const authUrl = (endpoint: string) => `auth${endpoint}`;

const signInApi = async (user: SignInApiParams) => {
    const response = await axiosClient.post(
        authUrl("/sign-in"),
        JSON.stringify(user)
    );

    const data = JSON.parse(response.data);

    if (response.status === 404) {
        data["status"] = response.status;
        throw data as ErrorResponse;
    }

    return data as SignInResponse;
};

const signUpApi = async (userData: SignUpApiParams) => {
    const response = await axiosClient.post(
        authUrl("/sign-up"),
        JSON.stringify(userData)
    );

    const data = JSON.parse(response.data);

    if (response.status === 404) {
        data["status"] = response.status;
        throw data as ErrorResponse;
    }

    return data as SignUpResponse;
};

export { signInApi, signUpApi };
