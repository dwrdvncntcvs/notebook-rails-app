import { Notebook } from "./notebooks";
import { PageMeta, SuccessResponse } from "./response";

interface IGetNotebookResponse {
    notebooks: Notebook[];
    meta: PageMeta;
}

interface ICreateNotebookResponse {
    notebook: Notebook;
}

export interface CreateNotebookApiParam {
    name: string;
}

export type GetNotebookResponse = SuccessResponse<IGetNotebookResponse>;

export type CreateNotebookResponse = SuccessResponse<ICreateNotebookResponse>;
