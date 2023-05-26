import { Backdrop, Modal } from "..";
import { FC, PropsWithChildren } from "react";

const ModalOverlay: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Backdrop />
            <Modal>{children}</Modal>
        </>
    );
};

export default ModalOverlay;
