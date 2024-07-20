"use client";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { MiddlePositionContaner } from "@/components";
import { CartItemDto } from "@/types";
import { CartItem } from "./CartItem/CartItem";

export const CartContainer = () => {
    const router = useRouter();

    const cartItemMock = {
        image: "",
        name: "apple",
        amount: 12,
        pricePerOne: 42,
    };

    const handleOrderCartItem = useCallback(
        (cartItem: CartItemDto) => (updatedAmount: number) => () => {
            router.push("/en/checkout");
        },
        [router]
    );

    const handleRemoveCartItem = useCallback(
        (cartItem: CartItemDto) => () => {},
        []
    );

    return (
        <MiddlePositionContaner>
            <div className="w-full flex flex-col gap-8">
                <CartItem
                    {...cartItemMock}
                    handleRemove={handleRemoveCartItem(cartItemMock)}
                    handleOrder={handleOrderCartItem(cartItemMock)}
                />
            </div>
        </MiddlePositionContaner>
    );
};
