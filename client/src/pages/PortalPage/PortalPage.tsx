import { Navigate, Outlet } from "react-router-dom";
import scss from "./portalPage.module.scss";
import { useAuth } from "../../context/Auth";

const PortalPage = () => {
    const { isAuth } = useAuth();

    return isAuth ? (
        <Navigate to={"/"} />
    ) : (
        <div className={scss["portal-container"]}>
            <Outlet />
        </div>
    );
};

export default PortalPage;
