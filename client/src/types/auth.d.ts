export interface AuthField {
    name: string;
    type: string;
    placeholder: string;
    label: string;
}

export interface SignInInitValues {
    username: string;
    password: string;
}

export interface SignUpInitValues {
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
    password_check: string;
}
