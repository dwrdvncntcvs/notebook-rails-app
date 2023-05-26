import { ModalOverlay } from "../../components/Common";
import { useLocation, useNavigate } from "react-router-dom";

const CreateNotebookPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const goBack = () => {
        navigate({ pathname: "/", search: location.state.search });
    };

    return (
        <ModalOverlay name="create_modal" destroyModal={goBack}>
            HelloWorld
        </ModalOverlay>
    );
};

export default CreateNotebookPage;
