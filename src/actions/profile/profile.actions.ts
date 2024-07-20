import axios from "axios";

export const getUserProfile = async () => {
    const res = await axios.get<unknown>("http://localhost:3000/api/profile");

    return res.data;
};
