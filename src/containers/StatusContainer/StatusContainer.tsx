import { FC } from "react";
import { MiddlePositionContaner } from "@/components";
import { StatusContainerProps } from "./StatusContainer.types";
import { StatusItem } from "./StatusItem/StatusItem";

export const StatusContainer: FC<StatusContainerProps> = ({
    productStatuses,
}) => {
    return (
        <MiddlePositionContaner>
            <div className="w-full h-full flex flex-col gap-6">
                {productStatuses.map((item, i) => (
                    <StatusItem
                        key={i}
                        image={item.image}
                        name={item.name}
                        status={item.status}
                    />
                ))}
            </div>
        </MiddlePositionContaner>
    );
};
