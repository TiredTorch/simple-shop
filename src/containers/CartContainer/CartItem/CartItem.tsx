import Image from "next/image";
import { FC } from "react";
import { Button } from "@/components";
import { CartItemProps } from "./CartItem.types";

export const CartItem: FC<CartItemProps> = () => {
    return (
        <div className="flex items-center w-full justify-between bg-slate-500 px-8 py-4 text-slate-800 rounded-sm">
            <div className="flex gap-6">
                <Image src={""} alt="" />
                <div className="font-semibold">name</div>
                <div>amount</div> {/*TODO add counter to change amount*/}
                <div className="font-semibold">total price</div>
            </div>
            <div className="flex gap-6">
                <Button buttonVariation={"cartItemButton"}>Order</Button>
                <Button buttonVariation={"cartItemButton"}>Remove</Button>
            </div>
        </div>
    );
};
