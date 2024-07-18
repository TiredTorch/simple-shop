import { FC, PropsWithChildren } from "react";

export const MiddlePositionContaner: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="h-[calc(100dvh-6rem)] bg-slate-400 sm:w-2/3 w-[100dvw] max-w-[100dvw] m-auto px-4 py-6 flex flex-col items-center justify-between overflow-y-auto overflow-x-hidden">
            {children}
        </div>
    );
};
