"use client";
import { useState } from "react";
import { ProductComponent } from "@/types";
import { ProductDetailsModal } from "./ProductDetailsModal/ProductDetailsModal";
import ProductItem from "./ProductItem/ProductItem";
import { ProductsFilterSidebar } from "./ProductsFilterSidebar/ProductsFilterSidebar";

export const ProductsContainer = () => {
    const [selectedProductItem, setSelectedProductItem] =
        useState<ProductComponent | null>(null);

    const resetProductItemSelection = () => {
        setSelectedProductItem(null);
    };

    const selectProductItem = (productItem: ProductComponent) => () => {
        setSelectedProductItem(productItem);
    };

    const testProduct: ProductComponent = {
        image: "",
        price: 220,
        description:
            "asd asd as fas df sd f sd fs df sd f sd fs dfsdfasdasdas asdas d asfsdfsd fsdfsd",
        name: "aaaaaa",
    };

    return (
        <>
            <div className="h-[calc(100dvh-6rem)] flex">
                <ProductsFilterSidebar />
                <div className="flex p-6 flex-col flex-wrap gap-6 w-[calc(100dvw-12rem)] max-w-[calc(100dvw-12rem)] overflow-auto">
                    <ProductItem
                        handleSelectComponent={selectProductItem(testProduct)}
                        {...testProduct}
                    />
                </div>
            </div>
            {selectedProductItem && (
                <ProductDetailsModal
                    open={!!selectedProductItem}
                    handleClose={resetProductItemSelection}
                    {...selectedProductItem}
                />
            )}
        </>
    );
};
