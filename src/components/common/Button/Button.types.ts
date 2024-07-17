import {
	ButtonHTMLAttributes,
	DetailedHTMLProps
} from "react";

export type ButtonProps = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & {
    buttonVariation:
        | "headerButton"
        | "modalButton"
        | "profileButton"
        | "cartItemButton"
        | "authButton"
        | "cartAmountButton"
        | "checkoutFormButton";
};
