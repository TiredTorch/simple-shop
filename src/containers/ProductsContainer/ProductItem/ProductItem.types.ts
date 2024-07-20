import { ProductDto } from "@/types";

export type ProductItemProps = ProductDto & {
    handleSelectComponent: VoidFunction;
};
