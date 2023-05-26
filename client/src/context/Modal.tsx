import { createContext, useContext } from "react";
import { FC, PropsWithChildren } from "react";

const ModalContext = createContext(null);

const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <ModalContext.Provider value={null}>{children}</ModalContext.Provider>
    );
};

const useModal = () => useContext(ModalContext);

export { ModalContext, ModalProvider, useModal };
