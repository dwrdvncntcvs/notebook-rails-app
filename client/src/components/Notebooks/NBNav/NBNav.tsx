import { HiPlus, HiArrowRight } from "react-icons/hi";
import { useAuth } from "../../../context/Auth";
import { useNotebook } from "../../../context/Notebook";
import { useActiveNotebook } from "../../../hooks";
import scss from "./nbnav.module.scss";
import { useLocation, useNavigate } from "react-router-dom";

const NBNav = () => {
    const { isAuth } = useAuth();
    const { notebooks } = useNotebook();
    const navigate = useNavigate();
    const { isSelected, selectNotebook } = useActiveNotebook();
    const location = useLocation();

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
                <button
                    onClick={() =>
                        navigate("/create", {
                            state: { search: location.search },
                        })
                    }
                >
                    <HiPlus />
                </button>
                {isAuth && (
                    <button>
                        <HiArrowRight />
                    </button>
                )}
            </div>
        </nav>
    );
};

export default NBNav;
