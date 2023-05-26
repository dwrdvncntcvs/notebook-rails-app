import { Backdrop, Modal } from "..";
import { FC, PropsWithChildren, useEffect } from "react";
import { IModalName } from "../../../types/modal_context";
import { useModal } from "../../../context/Modal";
import { HiX } from "react-icons/hi";
import scss from "./modalOverlay.module.scss";

interface ModalOverlayProps {
    destroyModal: () => void;
    name?: IModalName;
}

const ModalOverlay: FC<PropsWithChildren & ModalOverlayProps> = ({
    children,
    destroyModal,
    name,
}) => {
    const {
        create,
        destroy,
        name: modalName,
    } = useModal({
        destroyFn: destroyModal,
    });

    useEffect(() => {
        if (name) create(name);
    }, [name]);

    return name === modalName ? (
        <>
            <Backdrop destroy={destroy} />
            <Modal>
                <button id={scss["close-button"]} onClick={destroy}>
                    <HiX />
                </button>
                {children}
            </Modal>
        </>
    ) : null;
};

export default ModalOverlay;
