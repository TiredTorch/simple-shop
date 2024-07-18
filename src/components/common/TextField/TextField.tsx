import { FC } from "react";
import { TextFieldProps } from "./TextField.types";

export const TextField: FC<TextFieldProps> = ({
    label,
    className,
    textFieldVariation,
    ...rest
}) => {
    return (
        <div className={`${className}`}>
            {label && (
                <label className="text-lg font-semibold capitalize text-slate-800">
                    {label}
                </label>
            )}
            <input className={`rootTextField ${textFieldVariation}`} />
        </div>
    );
};
