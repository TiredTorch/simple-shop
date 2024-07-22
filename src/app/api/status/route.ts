import { ProductStatusDto, PurchaseStatus } from "@/types";

export const GET = async () => {
    const productStatuses: ProductStatusDto[] = [
        {
            image: "",
            name: "Apple",
            status: PurchaseStatus.APPROVED,
        },
        {
            image: "",
            name: "Apple",
            status: PurchaseStatus.DELIVERING,
        },
        {
            image: "",
            name: "Apple",
            status: PurchaseStatus.APPROVED,
        },
        {
            image: "",
            name: "Apple",
            status: PurchaseStatus.PENDING,
        },
        {
            image: "",
            name: "Apple",
            status: PurchaseStatus.RECEIVED,
        },
        {
            image: "",
            name: "Apple",
            status: PurchaseStatus.REJECTED,
        },
        {
            image: "",
            name: "Apple",
            status: PurchaseStatus.RECEIVED,
        },
    ];

    return Response.json(productStatuses);
};
