import Image from "next/image";
import { FC } from "react";
import { ProductItemProps } from "./ProductItem.types";

const ProductItem: FC<ProductItemProps> = ({
    name,
    image,
    price,
    handleSelectComponent,
}) => {
    return (
        <div
            className="bg-gradient-to-tl from-slate-300 to-slate-400 border-cyan-600 border-2 rounded-md w-64 h-40 flex flex-col justify-between cursor-pointer"
            onClick={handleSelectComponent}
        >
            <div className="flex w-full h-3/5">
                <Image src={image} alt={"product image"} className="w-full" />
                <div className="text-cyan-700 font-semibold w-full flex items-center justify-center text-xl">
                    {price}$
                </div>
            </div>
            <div className="w-full h-2/5 text-cyan-600 indent-3 p-2 overflow-ellipsis overflow-hidden whitespace-nowrap">
                {name}
            </div>
        </div>
    );
};

export default ProductItem;
