import { CartItemDto } from "@/types";

export type CartItemProps = CartItemDto & {
    handleOrder: (amount: number) => () => void;
    handleRemove: VoidFunction;
};
