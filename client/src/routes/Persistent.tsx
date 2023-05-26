import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AuthStorage } from "../services";

const Persistent = () => {
    const [isLoading, setIsLoading] = useState(true);
    const authStorage = new AuthStorage(localStorage);

    useEffect(() => {
        const token = authStorage.getToken();
        if (token) setIsLoading(false);
        else setIsLoading(false)
    }, []);

    return isLoading ? <div>Loading</div> : <Outlet />;
};

export default Persistent;
