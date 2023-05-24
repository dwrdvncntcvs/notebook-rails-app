import {
    NBHeader,
    NBMain,
    NBNav,
    NBSide,
    NBTextContainer,
} from "../../components/Notebooks";
import { NotebookLayout } from "../../layouts";
import scss from "./notebookPage.module.scss";

const NotebookPage = () => {
    return (
        <NotebookLayout>
            <NBHeader />
            <NBNav />
            <NBSide />
            <NBMain />
            <NBTextContainer />
        </NotebookLayout>
    );
};

export default NotebookPage;
