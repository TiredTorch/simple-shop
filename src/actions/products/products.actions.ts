import axios from "axios";
import { ProductDto } from "@/types";

export const getAllProducts = async () => {
    const res = await axios.get<ProductDto[]>(
        "http://localhost:3000/api/products/all"
    );

    return res.data;
};

export const applyFilter = async () => {
    const res = await axios.post<unknown>(
        "http://localhost:3000/api/products/filter"
    );

    return res.data;
};

export const getOneProduct = async () => {
    const res = await axios.get<ProductDto>(
        "http://localhost:3000/api/products"
    );

    return res.data;
};

export const addProductToCart = async () => {
    const res = await axios.post<unknown>("http://localhost:3000/api/products");

    return res.data;
};
