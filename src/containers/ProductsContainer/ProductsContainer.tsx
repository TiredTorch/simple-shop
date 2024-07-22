"use client";
import { useRouter } from "next/navigation";
import { FC, useCallback, useState } from "react";
import { ProductDto, ProductsSearchData } from "@/types";
import { ProductDetailsModal } from "./ProductDetailsModal/ProductDetailsModal";
import ProductItem from "./ProductItem/ProductItem";
import { ProductsContainerProps } from "./ProductsContainer.types";
import { ProductsFilterSidebar } from "./ProductsFilterSidebar/ProductsFilterSidebar";

export const ProductsContainer: FC<ProductsContainerProps> = ({ products }) => {
    const [selectedProductItem, setSelectedProductItem] =
        useState<ProductDto | null>(null);

    const router = useRouter();

    const handleSearchProduct = useCallback(
        (productsSearchData: ProductsSearchData) => {
            router.push(
                `/en/products?name=${productsSearchData.name}&maxPrice=${productsSearchData.maxPrice}&isAvalivable=${productsSearchData.isAvalivable}`
            );
        },
        [router]
    );

    const resetProductItemSelection = useCallback(() => {
        setSelectedProductItem(null);
    }, [setSelectedProductItem]);

    const selectProductItem = useCallback(
        (productItem: ProductDto) => () => {
            setSelectedProductItem(productItem);
        },
        [setSelectedProductItem]
    );

    return (
        <>
            <div className="h-[calc(100dvh-6rem)] flex">
                <ProductsFilterSidebar submitFilter={handleSearchProduct} />
                <div className="flex p-6 flex-col flex-wrap gap-6 w-[100dvw] max-w-[100dvw] overflow-auto">
                    {products.map((item, i) => (
                        <ProductItem
                            key={i}
                            handleSelectComponent={selectProductItem(item)}
                            {...item}
                        />
                    ))}
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
