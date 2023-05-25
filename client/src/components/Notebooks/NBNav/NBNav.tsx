import { useAuth } from "../../../context/Auth";
import scss from "./nbnav.module.scss";

const NBNav = () => {
    const { isAuth } = useAuth();

    return (
        <nav className={scss["nav-container"]}>
            <div className={scss["notebook-nav"]}>Nav</div>
            <div className={scss["actions-container"]}>
                <button>Add</button>
                {isAuth && <button>Log out</button>}
            </div>
        </nav>
    );
};

export default NBNav;
