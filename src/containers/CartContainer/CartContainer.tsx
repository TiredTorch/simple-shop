import { MiddlePositionContaner } from "@/components";
import { CartItemComponent } from "@/types";
import { CartItem } from "./CartItem/CartItem";

export const CartContainer = () => {
    const cartItemMock = {
        image: "",
        name: "apple",
        amount: 12,
        pricePerOne: 42,
    };

    const handleOrderCartItem =
        (cartItem: CartItemComponent) => (updatedAmount: number) => {};

    const handleRemoveCartItem = (cartItem: CartItemComponent) => () => {};

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
