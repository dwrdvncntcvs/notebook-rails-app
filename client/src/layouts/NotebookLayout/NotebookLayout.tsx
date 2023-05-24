import scss from "./notebookLayout.module.scss";
import { FC, PropsWithChildren } from "react";

const NotebookLayout: FC<PropsWithChildren> = ({ children }) => {
    return <div className={scss['notebook-layout']}>{children}</div>;
};

export default NotebookLayout;
