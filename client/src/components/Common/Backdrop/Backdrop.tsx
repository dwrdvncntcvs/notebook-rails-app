import { FC } from "react";
import scss from "./backdrop.module.scss";
import { createPortal } from "react-dom";

interface BackdropProps {
    destroy: () => void;
}

const Backdrop: FC<BackdropProps> = ({ destroy }) => {
    return createPortal(
        <div className={scss["backdrop"]} onClick={destroy}></div>,
        document.getElementById("backdrop-root") as HTMLDivElement
    );
};

export default Backdrop;
