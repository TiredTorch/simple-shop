"use client";
import { Form, Formik } from "formik";
import { FC } from "react";
import { Button, TextField } from "@/components";
import { CheckoutData, FormProps } from "@/types";

export const CheckoutForm: FC<FormProps<CheckoutData>> = ({
    initState,
    onSubmit,
}) => {
    return (
        <Formik
            initialValues={initState}
            onSubmit={onSubmit}
        >
            {() => (
                <Form className="flex flex-col items-center gap-10 justify-center h-full w-full">
                    <div className="flex gap-6">
                        <div className="flex flex-col gap-4">
                            <TextField
                                className="flex justify-between gap-4"
                                label="name"
                                textFieldVariation={"cardForm"}
                            />
                            <TextField
                                className="flex justify-between gap-4"
                                label="number"
                                textFieldVariation={"cardForm"}
                            />
                            <TextField
                                className="flex justify-between gap-4"
                                label="post department"
                                textFieldVariation={"cardForm"}
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <TextField
                                className="flex justify-between gap-4"
                                label="card number"
                                textFieldVariation={"cardForm"}
                            />
                            <TextField
                                className="flex justify-between gap-4"
                                label="date"
                                textFieldVariation={"cardForm"}
                            />
                            <TextField
                                className="flex justify-between gap-4"
                                label="cvv"
                                textFieldVariation={"cardForm"}
                            />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Button buttonVariation="checkoutFormButton">
                            Submit
                        </Button>
                        <Button buttonVariation="checkoutFormButton">
                            Cancel
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};
