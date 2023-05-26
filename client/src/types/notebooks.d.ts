export interface Notebook {
    id: number;
    name: string;
    user_id: number;
    created_at: string;
    updated_at: string;
}

export interface NotebookField {
    name: string;
    label: string;
    type: string;
    placeholder: string;
}

export interface NotebookValues {
    name: string;
}
