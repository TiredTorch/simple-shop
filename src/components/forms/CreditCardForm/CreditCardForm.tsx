"use client";
import { Form, Formik } from "formik";
import { FC } from "react";
import { TextField } from "@/components/common";
import { CreditData, FormProps } from "@/types";

export const CreditCardForm: FC<FormProps<CreditData>> = ({
    initState,
    onSubmit,
}) => {
    return (
        <Formik initialValues={initState} onSubmit={onSubmit}>
            {() => (
                <Form>
                    <TextField />
                </Form>
            )}
        </Formik>
    );
};
