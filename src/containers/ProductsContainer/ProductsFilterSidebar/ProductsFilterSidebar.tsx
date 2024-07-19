"use client";
import { useCallback, useState } from "react";
import { Button, ProductsSearchForm } from "@/components";

export const ProductsFilterSidebar = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(true);

    const handleToggleFilterBar = useCallback(() => {
        setIsFilterOpen((prev) => !prev);
    }, [setIsFilterOpen]);

    return (
        <div
            className={`bg-slate-400 w-72 px-2 py-4 h-[calc(100dvh-6rem)] absolute bottom-0 ${isFilterOpen ? "-left-72" : "left-0"} transition-all border-r-2 border-slate-600`}
        >
            <ProductsSearchForm
                onSubmit={console.log}
                initState={{
                    name: "",
                    minPrice: 0,
                    maxPrice: 0,
                    isAvalivable: false,
                }}
            />
            <Button
                buttonVariation={"searchFilterButton"}
                onClick={handleToggleFilterBar}
            >
                Filter
            </Button>
        </div>
    );
};
