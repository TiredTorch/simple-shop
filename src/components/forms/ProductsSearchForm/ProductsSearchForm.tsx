"use client";
import { Form, Formik } from "formik";
import React, { FC } from "react";
import { Checkbox, Slider, TextField } from "@/components/common";
import { FormProps, ProductsSearchData } from "@/types";

export const ProductsSearchForm: FC<FormProps<ProductsSearchData>> = ({
    initState,
    onSubmit,
}) => {
    // TODO update prettier rules
    // TODO check slider and checkbox with tailwind
    return (
        <Formik initialValues={initState} onSubmit={onSubmit}>
            {() => (
                <Form>
                    <div>
                        <TextField textFieldVariation={"productSearchForm"} />
                        <Slider />
                        <Checkbox />
                    </div>
                </Form>
            )}
        </Formik>
    );
};
