import { createContext, useContext, useState } from "react";
import { FC, PropsWithChildren } from "react";
import {
    CreateModalMethod,
    DestroyModalMethod,
    IModalContext,
    IModalName,
    IsModalActiveMethod,
    ModalHookParams,
} from "../types/modal_context";

const ModalContext = createContext<IModalContext>({
    name: "",
    create: (_name: IModalName) => {},
    destroy: () => {},
    isModalActive: (_modalName: IModalName) => true || false,
});

const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
    const [name, setName] = useState<IModalName>("");

    const create: CreateModalMethod = (name: IModalName) => {
        setName(name);
    };

    const isModalActive: IsModalActiveMethod = (
        modalName: IModalName | undefined
    ) => {
        return modalName === name;
    };

    const destroy: DestroyModalMethod = () => {
        setName("");
    };

    return (
        <ModalContext.Provider value={{ name, create, destroy, isModalActive }}>
            {children}
        </ModalContext.Provider>
    );
};

const useModal = (params: ModalHookParams = {}) => {
    const modalCtx = useContext(ModalContext);

    const destroy = () => {
        if (params.destroyFn) params.destroyFn();
        modalCtx.destroy();
    };

    return { ...modalCtx, destroy };
};

export { ModalContext, ModalProvider, useModal };
