import { ProductsSearchForm } from "@/components";

export const ProductsFilterSidebar = () => {
    return (
        <div className="bg-slate-400 w-72 px-2 py-4">
            {" "}
            {/* TODO check if i could use formik with ssr */}
            <ProductsSearchForm
                onSubmit={console.log}
                initState={{
                    name: "",
                    minPrice: 0,
                    maxPrice: 0,
                    isAvalivable: false,
                }}
            />
        </div>
    );
};
