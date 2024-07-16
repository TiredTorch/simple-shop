import React, {
	FC,
	PropsWithChildren
} from "react";
import { PublicRoute } from "@/hocs";

const Layout: FC<PropsWithChildren> = ({ children }) => {
    return <PublicRoute>{children}</PublicRoute>;
};

export default Layout;
