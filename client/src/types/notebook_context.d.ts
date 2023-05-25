import { Notebook } from "./notebooks";
import { PageMeta } from "./response";

interface INotebookContext {
    notebooks: Notebook[];
    meta: PageMeta;
}
