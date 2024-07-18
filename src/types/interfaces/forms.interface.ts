export type CheckoutData = {
    name: string;
    phoneNumber: string;
    post: string;
    cardNumber: number;
    date: string;
    cvv: number;
};

export type ProductsSearchData = {
    name: string;
    minPrice: number;
    maxPrice: number;
    isAvalivable: boolean;
};
