"use client";

import { FC, PropsWithChildren } from "react";
import { useGetTranslation } from "@/hooks";

export const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
    const { language, translation } = useGetTranslation();

    return <>{children}</>;
};
