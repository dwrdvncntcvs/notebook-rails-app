import {
    createContext,
    FC,
    PropsWithChildren,
    useContext,
    useCallback,
    useEffect,
    useState,
} from "react";
import { useAuth } from "./Auth";
import { getAllNotebooksApi } from "../api/notebook";
import { Notebook } from "../types/notebooks";
import { INotebookContext } from "../types/notebook_context";
import { PageMeta } from "../types/response";
import { useActiveNotebook } from "../hooks";

const defaultMeta = {
    limit: 0,
    page: 0,
    total_pages: 0,
};

const NotebookContext = createContext<INotebookContext>({
    notebooks: [],
    meta: defaultMeta,
});

const NotebookProvider: FC<PropsWithChildren> = ({ children }) => {
    const [notebooks, setNotebooks] = useState<Notebook[]>([]);
    const [meta, setMeta] = useState<PageMeta>(defaultMeta);
    const { token } = useAuth();
    const { notebookParams, selectNotebook } = useActiveNotebook();

    const getAllNotebooks = useCallback(async () => {
        if (token) {
            const response = await getAllNotebooksApi({
                Authorization: `Bearer ${token}`,
            });

            const notebooks = response.data.notebooks;

            setNotebooks(notebooks);
            setMeta(response.data.meta);

            if (!notebookParams) {
                selectNotebook(notebooks[0].id.toString());
            } else {
                selectNotebook(notebookParams);
            }
        }
    }, [token]);

    useEffect(() => {
        getAllNotebooks();
    }, [getAllNotebooks]);

    return (
        <NotebookContext.Provider value={{ notebooks, meta }}>
            {children}
        </NotebookContext.Provider>
    );
};

const useNotebook = () => useContext(NotebookContext);

export { NotebookProvider, NotebookContext, useNotebook };
