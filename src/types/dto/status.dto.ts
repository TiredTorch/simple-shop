import { PurchaseStatus } from "../enums";

export type ProductStatusDto = {
    image: string;
    name: string;
    status: PurchaseStatus;
};
