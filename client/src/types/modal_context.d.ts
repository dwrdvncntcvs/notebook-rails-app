const { CREATE_NOTEBOOK } = MODAL_VAR;

export type IModalName = "create_modal" | "sample_modal" | "";

export type CreateModalMethod = (name: IModalName) => void;

export type DestroyModalMethod = () => void;

export type IsModalActiveMethod = (modalName: IModalName) => boolean;

export interface ModalHookParams {
    destroyFn?: () => void;
}

interface IModalContext {
    name: IModalName;
    create: CreateModalMethod;
    destroy: DestroyModalMethod;
    isModalActive: IsModalActiveMethod;
}
