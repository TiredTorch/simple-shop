import { MiddlePositionContaner } from "@/components";
import { PurchaseStatus } from "@/types";
import { StatusItem } from "./StatusItem/StatusItem";

export const StatusContainer = () => {
    return (
        <MiddlePositionContaner>
            {" "}
            {/*TODO config types for status item*/}
            <div className="w-full h-full flex flex-col gap-6">
                <StatusItem
                    image={""}
                    name={"123"}
                    status={PurchaseStatus.APPROVED}
                />
                <StatusItem
                    image={""}
                    name={"123"}
                    status={PurchaseStatus.DELIVERING}
                />
                <StatusItem
                    image={""}
                    name={"123"}
                    status={PurchaseStatus.PENDING}
                />
                <StatusItem
                    image={""}
                    name={"123"}
                    status={PurchaseStatus.PENDING}
                />
                <StatusItem
                    image={""}
                    name={"123"}
                    status={PurchaseStatus.RECEIVED}
                />
                <StatusItem
                    image={""}
                    name={"123"}
                    status={PurchaseStatus.REJECTED}
                />
                <StatusItem
                    image={""}
                    name={"123"}
                    status={PurchaseStatus.RECEIVED}
                />
            </div>
        </MiddlePositionContaner>
    );
};
