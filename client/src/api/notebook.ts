import { axiosClient } from ".";
import { Pagination } from "../types/api";
import {
    CreateNotebookApiParam,
    CreateNotebookResponse,
    GetNotebookResponse,
} from "../types/notebook_api";
import { ErrorResponse } from "../types/response";

const notebookUrl = (endpoint: string) => `notebooks${endpoint}`;

const getAllNotebooksApi = async (
    { page = 1, limit = 10 }: Pagination,
    headers: any
) => {
    const response = await axiosClient.get(
        notebookUrl(`/?page=${page}&limit=${limit}`),
        { headers: { ...headers } }
    );

    const data = JSON.parse(response.data);

    if (response.status === 400) {
        data["status"] = response.status;
        throw data as ErrorResponse;
    }

    return data as GetNotebookResponse;
};

const createNotebookApi = async (
    notebook: CreateNotebookApiParam,
    headers: any
) => {
    const response = await axiosClient.post(
        notebookUrl("/"),
        JSON.stringify(notebook),
        { headers: { ...headers } }
    );

    const data = JSON.parse(response.data);

    if (response.status === 400) {
        data["status"] = response.status;
        throw data as ErrorResponse;
    }

    if (response.status === 422) {
        data["status"] = response.status;
        throw data as ErrorResponse;
    }

    return data as CreateNotebookResponse;
};

export { getAllNotebooksApi, createNotebookApi };
