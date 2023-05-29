import { useLocation, useSearchParams } from "react-router-dom";
import { Pagination } from "../types/api";
import { useState, useEffect } from "react";
import { PageMeta } from "../types/response";

const usePagination = (initialValues: Pagination) => {
    const location = useLocation();
    const [sp, setSp] = useSearchParams(location.search);

    const [page, setPage] = useState(initialValues.page);
    const [limit] = useState(initialValues.limit);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        sp.set("nbp", page.toString());
        setSp(sp);
    }, [page, limit, sp]);

    const updatePagination = (pageMeta: PageMeta) => {
        setTotalPages(pageMeta.total_pages);
    };

    const nextPage = () => {
        if (totalPages > page) setPage((prev) => prev + 1);
    };

    const prevPage = () => {
        if (page > 1) setPage((prev) => prev - 1);
    };

    return { page, limit, nextPage, prevPage, updatePagination };
};

export default usePagination;
