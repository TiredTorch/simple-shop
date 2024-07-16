import {
	FC,
	PropsWithChildren
} from "react";

export const PublicRoute: FC<PropsWithChildren> = ({ children }) => {
    return <>{children}</>;
};
