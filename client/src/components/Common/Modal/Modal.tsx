import { createPortal } from "react-dom";
import { FC, PropsWithChildren } from "react";
import scss from "./modal.module.scss";

const Modal: FC<PropsWithChildren> = ({ children }) => {
    return createPortal(
        <div className={scss["modal"]}>{children}</div>,
        document.getElementById("modal-root") as HTMLDivElement
    );
};

export default Modal;
