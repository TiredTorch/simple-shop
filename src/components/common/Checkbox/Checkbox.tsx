import { FC } from "react";
import { CheckboxProps } from "./Checkbox.types";

export const Checkbox: FC<CheckboxProps> = ({ label, id, ...rest }) => {
    return (
        <div className="flex items-center">
            <input
                id={id}
                type="checkbox"
                {...rest}
                className="w-4 h-4 text-cyan-900 bg-gray-100 border-gray-300 rounded "
            />
            <label
                htmlFor={id}
                className="ms-2 text-lg font-semibold text-slate-600 transition-colors"
            >
                {label}
            </label>
        </div>
    );
};
