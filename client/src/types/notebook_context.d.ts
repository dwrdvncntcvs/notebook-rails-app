import { Notebook, NotebookValues } from "./notebooks";
import { PageMeta } from "./response";

export type CreateNotebookCtxMethod = (
    notebook: NotebookValues
) => Promise<void>;

interface INotebookContext {
    notebooks: Notebook[];
    meta: PageMeta;
    createNotebook: CreateNotebookCtxMethod;
}
