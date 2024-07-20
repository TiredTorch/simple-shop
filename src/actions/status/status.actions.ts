import axios from "axios";

export const getUserProductsStatus = async () => {
    const res = await axios.get<unknown>("http://localhost:3000/api/status");

    return res.data;
};
