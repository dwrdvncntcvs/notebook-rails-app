import { ModalOverlay } from "../../components/Common";
import { useLocation, useNavigate } from "react-router-dom";
import { CreateNotebookForm } from "../../components/Notebooks";

const CreateNotebookPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const goBack = () => {
        navigate({
            pathname: "/",
            search: location.state?.search || location.search,
        });
    };

    return (
        <ModalOverlay name="create_modal" destroyModal={goBack}>
            <CreateNotebookForm goBack={goBack} />
        </ModalOverlay>
    );
};

export default CreateNotebookPage;
