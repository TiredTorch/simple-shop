import Image from "next/image";
import { FC } from "react";

import { ProductStatus } from "./ProductStatus/ProductStatus";
import { StatusItemProps } from "./StatusItem.types";

export const StatusItem: FC<StatusItemProps> = ({ image, name, status }) => {
    return (
        <div className="bg-slate-500 w-full px-4 py-2 flex justify-between items-center">
            <div className="flex gap-1 items-center">
                <Image alt="productImg" src={image} />
                <div>{name}</div>
            </div>
            <ProductStatus status={status} />
        </div>
    );
};
