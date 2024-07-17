import { FC } from "react";
import { ButtonProps } from "./Button.types";

export const Button: FC<ButtonProps> = ({
    children,
    buttonVariation,
    className,
    ...props
}) => {
    return (
        <button
            {...props}
            className={`
                ${className}
                rootButton
                ${buttonVariation}
            `}
        >
            {children}
        </button>
    );
};
