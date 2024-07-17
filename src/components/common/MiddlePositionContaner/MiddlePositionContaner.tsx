import { FC, PropsWithChildren } from "react";

export const MiddlePositionContaner: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="h-[calc(100dvh-6rem)] bg-slate-400 w-2/3 m-auto px-4 py-6 flex flex-col items-center justify-between overflow-auto">
            {children}
        </div>
    );
};
