import scss from "./backdrop.module.scss";
import { createPortal } from "react-dom";

const Backdrop = () => {
    return createPortal(
        <div className={scss["backdrop"]}></div>,
        document.getElementById("backdrop-root") as HTMLDivElement
    );
};

export default Backdrop;
