import { getAllProducts } from "@/actions";
import { ProductsContainer } from "@/containers";

const Page = async () => {
    const products = await getAllProducts();

    return <ProductsContainer products={products} />;
};

export default Page;
