import { FC } from "react";
import { TextFieldProps } from "./TextField.types";

export const TextField: FC<TextFieldProps> = ({
    label,
    className,
    ...rest
}) => {
    return (
        <div className={`${className}`}>
            {label && (
                <label className="text-lg font-semibold capitalize text-slate-800">
                    {label}
                </label>
            )}
            <input //TODO field styles with no selection ring (+)
                className="border-2 border-slate-500 text-slate-700 bg-slate-300 rounded-md font-semibold text-lg px-2 py-1 focus:ring-0 focus:border-slate-500"
            />
        </div>
    );
};
