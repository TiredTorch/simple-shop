import axios from "axios";
import { ProductStatusDto } from "@/types";

export const getUserProductsStatus = async () => {
    const res = await axios.get<ProductStatusDto[]>(
        "http://localhost:3000/api/status"
    );

    return res.data;
};
