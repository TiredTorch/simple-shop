import React, { FC, PropsWithChildren } from "react";
import { PrivateRoute } from "@/hocs";

const Layout: FC<PropsWithChildren> = ({ children }) => {
    return <PrivateRoute>{children}</PrivateRoute>;
};

export default Layout;
