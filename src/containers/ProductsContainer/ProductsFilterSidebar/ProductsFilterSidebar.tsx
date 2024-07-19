"use client";
import { FC, useCallback, useState } from "react";
import { Button, ProductsSearchForm } from "@/components";
import { ProductsFilterSidebarProps } from "./ProductsFilterSidebar.types";

export const ProductsFilterSidebar: FC<ProductsFilterSidebarProps> = ({
    submitFilter,
}) => {
    const [isFilterOpen, setIsFilterOpen] = useState(true);

    const handleToggleFilterBar = useCallback(() => {
        setIsFilterOpen((prev) => !prev);
    }, [setIsFilterOpen]);

    return (
        <div
            className={`bg-slate-400 sm:w-72 w-[100dvw] px-2 py-4 h-[calc(100dvh-6rem)] absolute bottom-0 ${isFilterOpen ? "sm:-left-72" : "sm:left-0"} ${isFilterOpen ? "-left-[100dvw]" : "left-0"} transition-all border-r-2 border-slate-600`}
        >
            <ProductsSearchForm
                onSubmit={submitFilter}
                initState={{
                    name: "",
                    maxPrice: 0,
                    isAvalivable: false,
                }}
            />
            <Button
                buttonVariation={"searchFilterButton"}
                onClick={handleToggleFilterBar}
            >
                Toggle Filter
            </Button>
        </div>
    );
};
