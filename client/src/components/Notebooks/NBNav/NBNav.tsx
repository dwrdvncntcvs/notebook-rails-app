import { useAuth } from "../../../context/Auth";
import { useNotebook } from "../../../context/Notebook";
import scss from "./nbnav.module.scss";

const NBNav = () => {
    const { isAuth } = useAuth();
    const { notebooks } = useNotebook();

    return (
        <nav className={scss["nav-container"]}>
            <div className={scss["notebook-nav"]}>
                <ul>
                    {notebooks.map(({ name, id }) => (
                        <li key={id}>{name}</li>
                    ))}
                </ul>
            </div>
            <div className={scss["actions-container"]}>
                <button>Add</button>
                {isAuth && <button>Log out</button>}
            </div>
        </nav>
    );
};

export default NBNav;
