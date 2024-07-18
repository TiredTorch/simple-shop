import { FC } from "react";
import { PurchaseStatus } from "@/types";
import { ProductStatusProps } from "./ProductStatus.types";

export const ProductStatus: FC<ProductStatusProps> = ({ status }) => {
    return (
        <div className="flex gap-2 items-center">
            <div
                className={`
                font-semibold
                ${status === PurchaseStatus.PENDING && "text-gray-700"}
                ${status === PurchaseStatus.APPROVED && "text-blue-700"}
                ${status === PurchaseStatus.DELIVERING && "text-yellow-500"}
                ${status === PurchaseStatus.REJECTED && "text-red-500"}
                ${status === PurchaseStatus.RECEIVED && "text-green-500"}    
            `}
            >
                {status === PurchaseStatus.PENDING && "Pending"}
                {status === PurchaseStatus.APPROVED && "Approved"}
                {status === PurchaseStatus.DELIVERING && "Delivering"}
                {status === PurchaseStatus.REJECTED && "Rejected"}
                {status === PurchaseStatus.RECEIVED && "Received"}
            </div>
            <div
                className={`
                w-3 h-3 rounded-full mt-[2px]
                ${status === PurchaseStatus.PENDING && "bg-gray-700"}
                ${status === PurchaseStatus.APPROVED && "bg-blue-700"}
                ${status === PurchaseStatus.DELIVERING && "bg-yellow-500"}
                ${status === PurchaseStatus.REJECTED && "bg-red-500"}
                ${status === PurchaseStatus.RECEIVED && "bg-green-500"}
            `}
            />
        </div>
    );
};
