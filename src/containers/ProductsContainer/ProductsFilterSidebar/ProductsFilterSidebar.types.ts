import { FormProps, ProductsSearchData } from "@/types";

export type ProductsFilterSidebarProps = {
    submitFilter: FormProps<ProductsSearchData>["onSubmit"];
};
