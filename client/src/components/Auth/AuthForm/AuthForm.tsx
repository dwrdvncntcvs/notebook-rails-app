import { Formik, Form, Field, ErrorMessage } from "formik";
import { FC } from "react";
import { AuthField } from "../../../types/auth";
import scss from "./authForm.module.scss"

interface AuthFormProps {
    initialValues: any;
    submitHandler: (values: any) => void;
    fields: AuthField[];
    buttonLabel: string;
}

const AuthForm: FC<AuthFormProps> = ({
    fields,
    initialValues,
    submitHandler,
    buttonLabel,
}) => {
    return (
        <Formik initialValues={initialValues} onSubmit={submitHandler}>
            <Form className={scss['auth-form']}>
                {fields.map(({ name, type, placeholder, label }) => (
                    <div key={name} className={scss['form-control']}>
                        <label htmlFor="name">{label}:</label>
                        <Field
                            id={name}
                            name={name}
                            type={type}
                            placeholder={placeholder}
                        />
                        <p>
                            <ErrorMessage name={name} />
                        </p>
                    </div>
                ))}
                <button type="submit">{buttonLabel}</button>
            </Form>
        </Formik>
    );
};

export default AuthForm;
