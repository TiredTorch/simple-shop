import Image from "next/image";
import { FC, useCallback, useState } from "react";
import { Button } from "@/components";
import { CartItemProps } from "./CartItem.types";

export const CartItem: FC<CartItemProps> = ({
    handleOrder,
    handleRemove,
    amount,
    pricePerOne,
    image,
    name,
}) => {
    const [itemsAmount, setItemsAmount] = useState(amount);

    const handleAddItemsAmount = useCallback(() => {
        setItemsAmount((prev) => prev + 1);
    }, [setItemsAmount]);

    const handleReduceItemsAmount = useCallback(() => {
        setItemsAmount((prev) => (prev === 1 ? 1 : prev - 1));
    }, [setItemsAmount]);

    return (
        <div className="flex items-center w-full justify-between bg-slate-500 px-8 py-4 text-slate-800 rounded-sm">
            <div className="flex gap-6 items-start xl:items-center flex-col xl:flex-row xl:gap-16">
                <Image src={image} alt="itemImage" />
                <div className="font-semibold">{name}</div>
                <div className="flex items-center gap-1">
                    <Button
                        buttonVariation={"cartAmountButton"}
                        onClick={handleReduceItemsAmount}
                    >
                        -
                    </Button>
                    {itemsAmount}
                    <Button
                        buttonVariation={"cartAmountButton"}
                        onClick={handleAddItemsAmount}
                    >
                        +
                    </Button>
                </div>
                <div className="font-semibold">
                    {pricePerOne * itemsAmount}$
                </div>
            </div>
            <div className="flex gap-6 flex-col xl:flex-row">
                <Button
                    buttonVariation="cartItemButton"
                    onClick={handleOrder(amount)}
                >
                    Order
                </Button>
                <Button buttonVariation="cartItemButton" onClick={handleRemove}>
                    Remove
                </Button>
            </div>
        </div>
    );
};
