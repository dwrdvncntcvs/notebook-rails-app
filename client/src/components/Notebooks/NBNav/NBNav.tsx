import { HiPlus, HiArrowRight } from "react-icons/hi";
import { useAuth } from "../../../context/Auth";
import { useNotebook } from "../../../context/Notebook";
import scss from "./nbnav.module.scss";
import { useLocation, useNavigate } from "react-router-dom";

const NBNav = () => {
    const { isAuth } = useAuth();
    const { notebooks, nextNotebooks, prevNotebooks } = useNotebook();
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <nav className={scss["nav-container"]}>
            <div className={scss["notebook-nav"]}>
                <button onClick={prevNotebooks}>Prev</button>
                <ul>
                    {notebooks.map((notebook) => (
                        <li
                            className={""}
                            key={notebook.id}
                            onClick={() =>
                                console.log("Notebook ID: ", notebook.id)
                            }
                        >
                            {notebook.name}
                        </li>
                    ))}
                </ul>
                <button onClick={nextNotebooks}>Next</button>
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
