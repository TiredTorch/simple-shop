import axios from "axios";
import { CartItemDto } from "@/types";

export const getCartProducts = async () => {
    const res = await axios.get<CartItemDto[]>(
        "http://localhost:3000/api/cart"
    );

    return res.data;
};

export const changeCartProductAmount = async () => {
    const res = await axios.patch<unknown>("http://localhost:3000/api/cart");

    return res.data;
};

export const removeProductFromCart = async () => {
    const res = await axios.delete<unknown>("http://localhost:3000/api/cart");

    return res.data;
};
