import { Outlet } from "react-router-dom";
import scss from "./portalPage.module.scss"

const PortalPage = () => {
    return (
        <div className={scss['portal-container']}>
            <Outlet />
        </div>
    );
};

export default PortalPage;
