import { FC } from "react";
import { SliderProps } from "./Slider.types";

export const Slider: FC<SliderProps> = () => {
    return (
        <div className="relative mb-6">
            <input
                id="labels-range-input"
                type="range"
                value="1000"
                min="100"
                max="1500"
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-sm text-slate-700 absolute start-0 -bottom-6">
                Min ($100)
            </span>
            <span className="text-sm text-slate-700 absolute end-0 -bottom-6">
                Max ($1500)
            </span>
        </div>
    );
};
