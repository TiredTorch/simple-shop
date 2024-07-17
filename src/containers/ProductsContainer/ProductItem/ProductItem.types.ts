import { ProductComponent } from "@/types";

export type ProductItemProps = ProductComponent & {
    handleSelectComponent: VoidFunction;
};
