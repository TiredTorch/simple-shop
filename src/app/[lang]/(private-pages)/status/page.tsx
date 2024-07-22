import { getUserProductsStatus } from "@/actions";
import { StatusContainer } from "@/containers";

const Page = async () => {
    const productStatuses = await getUserProductsStatus();

    return <StatusContainer productStatuses={productStatuses} />;
};

export default Page;
