import { Notebook } from "./notebooks";
import { PageMeta, SuccessResponse } from "./response";

interface IGetNotebookResponse {
    notebooks: Notebook[];
    meta: PageMeta;
}

export type GetNotebookResponse = SuccessResponse<IGetNotebookResponse>;
