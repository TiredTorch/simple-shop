import React, { FC, PropsWithChildren } from "react";
import { ModalOverlayProps } from "./ModalOverlay.types";

export const ModalOverlay: FC<PropsWithChildren<ModalOverlayProps>> = ({
    children,
    open,
}) => {
    return (
        <div //TODO display none
            className={`absolute w-[100dvw] h-[100dvh] bg-gray-900 top-0 right-0 z-10 bg-opacity-80 flex items-center justify-center ${!open && ""}`}
        >
            <div className="bg-slate-400 p-6 rounded-lg">{children}</div>
        </div>
    );
};
