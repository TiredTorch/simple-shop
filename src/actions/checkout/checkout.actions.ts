import axios from "axios";

export const confirmCheckout = async () => {
    const res = await axios.post<unknown>("http://localhost:3000/api/checkout");

    return res.data;
};
