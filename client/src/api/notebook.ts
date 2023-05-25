import { axiosClient } from ".";
import { GetNotebookResponse } from "../types/notebook_api";
import { ErrorResponse } from "../types/response";

const notebookUrl = (endpoint: string) => `notebooks${endpoint}`;

const getAllNotebooksApi = async (headers: any) => {
    const response = await axiosClient.get(notebookUrl("/?page=1&limit=5"), {
        headers: { ...headers },
    });

    const data = JSON.parse(response.data);

    if (response.status === 400) {
        data["status"] = response.status;
        throw data as ErrorResponse;
    }

    return data as GetNotebookResponse;
};

export { getAllNotebooksApi };
