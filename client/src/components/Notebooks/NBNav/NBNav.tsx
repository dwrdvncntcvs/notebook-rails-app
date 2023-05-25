import { useAuth } from "../../../context/Auth";
import { useNotebook } from "../../../context/Notebook";
import { useActiveNotebook } from "../../../hooks";
import scss from "./nbnav.module.scss";

const NBNav = () => {
    const { isAuth } = useAuth();
    const { notebooks } = useNotebook();
    const { isSelected, selectNotebook } = useActiveNotebook();

    return (
        <nav className={scss["nav-container"]}>
            <div className={scss["notebook-nav"]}>
                <ul>
                    {notebooks.map((notebook) => (
                        <li
                            className={
                                isSelected(notebook.id) ? scss["active"] : ""
                            }
                            key={notebook.id}
                            onClick={() =>
                                selectNotebook(notebook.id.toString())
                            }
                        >
                            {notebook.name}
                        </li>
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
