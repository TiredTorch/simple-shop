import Image from "next/image";
import React, { FC } from "react";
import { Button, ModalOverlay } from "@/components";
import { ProductDto, PropsForModal } from "@/types";

export const ProductDetailsModal: FC<PropsForModal<ProductDto>> = ({
    description,
    image,
    name,
    price,
    open,
    handleClose,
}) => {
    return (
        <ModalOverlay open>
            <div className="flex flex-col items-center justify-between gap-10">
                <div className="flex justify-between gap-4">
                    <Image
                        src={image}
                        alt={"product image"}
                        className="w-2/5"
                    />
                    <div className="w-3/5 flex flex-col gap-2">
                        <div>{name}</div>
                        <div>{price}</div>
                        <div>{description}</div>
                    </div>
                </div>
                <div className="flex w-full justify-between">
                    <Button buttonVariation="modalButton">Add to cart</Button>
                    <Button
                        buttonVariation="modalButton"
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </ModalOverlay>
    );
};
