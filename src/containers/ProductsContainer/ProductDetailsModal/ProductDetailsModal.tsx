import Image from "next/image";
import React, { FC } from "react";
import { Button, ModalOverlay } from "@/components";
import { ProductComponent, PropsForModal } from "@/types";

export const ProductDetailsModal: FC<PropsForModal<ProductComponent>> = ({
    description,
    image,
    name,
    price,
    open,
    handleClose,
}) => {
    return (
        <ModalOverlay open>
            <div>
                <div>
                    <Image src={image} alt={"product image"} />
                    <div>
                        <div>{name}</div>
                        <div>{price}</div>
                        <div>{description}</div>
                    </div>
                </div>
                <div>
                    <Button buttonVariation="modalButton">
                        Order Selected
                    </Button>
                    <Button buttonVariation="modalButton" onClick={handleClose}>
                        Cancel
                    </Button>
                </div>
            </div>
        </ModalOverlay>
    );
};
