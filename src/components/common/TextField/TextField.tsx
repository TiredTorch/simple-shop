import { FC } from "react";
import { TextFieldProps } from "./TextField.types";

export const TextField: FC<TextFieldProps> = ({ ...rest }) => {
    return (
        <div>
            <label></label>
            <input />
        </div>
    );
};
