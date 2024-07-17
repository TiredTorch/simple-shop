import { CartItemComponent } from "@/types";

export type CartItemProps = CartItemComponent & {
    handleOrder: (amount: number) => void;
    handleRemove: VoidFunction;
};
