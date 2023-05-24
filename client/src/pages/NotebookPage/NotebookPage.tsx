import {
    NBHeader,
    NBMain,
    NBSide,
    NBTextContainer,
} from "../../components/Notebooks";
import { NotebookLayout } from "../../layouts";
import scss from "./notebookPage.module.scss";

const NotebookPage = () => {
    return (
        <NotebookLayout>
            <NBHeader />
            <NBSide />
            <NBMain />
            <NBTextContainer />
        </NotebookLayout>
    );
};

export default NotebookPage;
