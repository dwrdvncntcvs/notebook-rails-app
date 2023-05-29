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
import { createNotebookApi, getAllNotebooksApi } from "../api/notebook";
import { Notebook } from "../types/notebooks";
import {
    CreateNotebookCtxMethod,
    INotebookContext,
} from "../types/notebook_context";
import { PageMeta } from "../types/response";
import usePagination from "../hooks/usePagination";

const defaultMeta = {
    limit: 0,
    page: 0,
    total_pages: 0,
};

const NotebookContext = createContext<INotebookContext>({
    notebooks: [],
    meta: defaultMeta,
    createNotebook: async (_notebook) => {},
    prevNotebooks: () => {},
    nextNotebooks: () => {},
});

const initialPaginationValues = {
    page: 1,
    limit: 6,
};

const NotebookProvider: FC<PropsWithChildren> = ({ children }) => {
    const [notebooks, setNotebooks] = useState<Notebook[]>([]);
    const [meta, setMeta] = useState<PageMeta>(defaultMeta);
    const { token } = useAuth();

    const { limit, page, nextPage, prevPage, updatePagination } = usePagination(
        initialPaginationValues
    );

    const getAllNotebooks = useCallback(async () => {
        if (token) {
            const response = await getAllNotebooksApi(
                { page, limit },
                {
                    Authorization: `Bearer ${token}`,
                }
            );

            const notebooks = response.data.notebooks;

            setNotebooks(notebooks);
            setMeta(response.data.meta);
            updatePagination(response.data.meta);
        }
    }, [token, limit, page]);

    useEffect(() => {
        getAllNotebooks();
    }, [getAllNotebooks]);

    const createNotebook: CreateNotebookCtxMethod = async (notebook) => {
        try {
            await createNotebookApi(
                { notebook: { ...notebook } },
                { Authorization: `Bearer ${token}` }
            );

            await getAllNotebooks();
        } catch (err) {
            console.log(err);
        }
    };

    const nextNotebooks = () => nextPage();

    const prevNotebooks = () => prevPage();

    return (
        <NotebookContext.Provider
            value={{
                notebooks,
                meta,
                createNotebook,
                nextNotebooks,
                prevNotebooks,
            }}
        >
            {children}
        </NotebookContext.Provider>
    );
};

const useNotebook = () => useContext(NotebookContext);

export { NotebookProvider, NotebookContext, useNotebook };
