"use client";
import { useCallback, useMemo, useState } from "react";
import { ProductComponent } from "@/types";
import { ProductDetailsModal } from "./ProductDetailsModal/ProductDetailsModal";
import ProductItem from "./ProductItem/ProductItem";
import { ProductsFilterSidebar } from "./ProductsFilterSidebar/ProductsFilterSidebar";

export const ProductsContainer = () => {
    const [selectedProductItem, setSelectedProductItem] =
        useState<ProductComponent | null>(null);

    const resetProductItemSelection = useCallback(() => {
        setSelectedProductItem(null);
    }, [setSelectedProductItem]);

    const selectProductItem = useCallback(
        (productItem: ProductComponent) => () => {
            setSelectedProductItem(productItem);
        },
        [setSelectedProductItem]
    );

    const testProduct: ProductComponent = useMemo(
        () => ({
            image: "",
            price: 220,
            description:
                "asd asd as fas df sd f sd fs df sd f sd fs dfsdfasdasdas asdas d asfsdfsd fsdfsd",
            name: "dasfjaskjf jasdhflkjs dkjsdhf lsslkdjfhs ikjh sdfsdf sdfsd fsdfdssdfddfsfdsfsdfsd",
        }),
        []
    );

    return (
        <>
            <div className="h-[calc(100dvh-6rem)] flex">
                <ProductsFilterSidebar />
                <div className="flex p-6 flex-col flex-wrap gap-6 w-[100dvw] max-w-[100dvw] overflow-auto">
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
