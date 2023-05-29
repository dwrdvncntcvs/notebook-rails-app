import { Notebook, NotebookValues } from "./notebooks";
import { PageMeta } from "./response";

export type CreateNotebookCtxMethod = (
    notebook: NotebookValues
) => Promise<void>;

export type GetNextNotebookCtxMethod = () => void;

export type GetPrevNotebookCtxMethod = () => void;

export type NextNotebooks = () => void;

export type PrevNotebooks = () => void;

interface INotebookContext {
    notebooks: Notebook[];
    meta: PageMeta;
    createNotebook: CreateNotebookCtxMethod;
    nextNotebooks: NextNotebooks;
    prevNotebooks: PrevNotebooks;
}
