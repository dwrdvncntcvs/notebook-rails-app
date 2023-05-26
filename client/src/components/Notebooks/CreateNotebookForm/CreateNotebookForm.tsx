import { useNotebook } from "../../../context/Notebook";
import scss from "./createNotebookForm.module.scss";
import { Field, Form, Formik } from "formik";
import { FC } from "react";
interface CreateNotebookFormProps {
    goBack?: () => void;
}

const CreateNotebookForm: FC<CreateNotebookFormProps> = ({ goBack }) => {
    const { createNotebook } = useNotebook();

    return (
        <Formik
            initialValues={{ name: "" }}
            onSubmit={async (values) => {
                await createNotebook(values);
                if (goBack) goBack();
            }}
        >
            <Form className={scss["form"]}>
                <h1>Create Notebook</h1>

                <div className={scss["form-control"]}>
                    <Field
                        type="text"
                        name="name"
                        placeholder="Enter Notebook Name"
                    />
                </div>

                <button type="submit">CREATE</button>
            </Form>
        </Formik>
    );
};

export default CreateNotebookForm;
