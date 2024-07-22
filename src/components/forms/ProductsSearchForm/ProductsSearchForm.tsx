"use client";
import { Form, Formik } from "formik";
import React, { FC } from "react";
import { Button, Checkbox, Slider, TextField } from "@/components/common";
import { FormProps, ProductsSearchData } from "@/types";

export const ProductsSearchForm: FC<FormProps<ProductsSearchData>> = ({
    initState,
    onSubmit,
}) => {
    return (
        <Formik
            initialValues={initState}
            onSubmit={onSubmit}
        >
            {() => (
                <Form>
                    <div className="flex flex-col gap-7 w-full pt-10">
                        <TextField
                            textFieldVariation={"productSearchForm"}
                            placeholder="Search some products"
                        />
                        <Slider />
                        <Checkbox
                            label={"Avalivable"}
                            checked={false}
                            onChange={console.log}
                        />
                        <Button
                            buttonVariation={"searchProductButton"}
                            type="submit"
                        >
                            Search
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};
