import { Outlet } from "react-router-dom";
import {
    NBHeader,
    NBMain,
    NBNav,
    NBSide,
    NBTextContainer,
} from "../../components/Notebooks";
import { NotebookLayout } from "../../layouts";

const NotebookPage = () => {
    return (
        <NotebookLayout>
            <NBHeader />
            <NBNav />
            <NBSide />
            <NBMain />
            <NBTextContainer />
            <Outlet />
        </NotebookLayout>
    );
};

export default NotebookPage;
