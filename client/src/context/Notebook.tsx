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

    const getAllNotebooks = useCallback(async () => {
        if (token) {
            const response = await getAllNotebooksApi({
                Authorization: `Bearer ${token}`,
            });

            setNotebooks(response.data.notebooks);
            setMeta(response.data.meta);
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
