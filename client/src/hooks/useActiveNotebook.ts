import { useLocation, useSearchParams } from "react-router-dom";

const useActiveNotebook = () => {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams(location.search);

    const nb = searchParams.get("notebook") as string;

    const selectNotebook = (id: string) => {
        setSearchParams({ notebook: id });
    };

    const isSelected = (id: number) => {
        return +nb === id;
    };

    return { isSelected, selectNotebook, notebookParams: nb };
};

export default useActiveNotebook;
