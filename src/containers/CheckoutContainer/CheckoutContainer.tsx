"use client";
import { CheckoutForm, MiddlePositionContaner } from "@/components";

export const CheckoutContainer = () => {
    return (
        //TODO check others checkout pages (form should have number and city selection)
        <MiddlePositionContaner>
            <CheckoutForm
                onSubmit={console.log}
                initState={{
                    name: "",
                    phoneNumber: "",
                    post: "",
                    cardNumber: 0,
                    date: "",
                    cvv: 0,
                }}
            />
        </MiddlePositionContaner>
    );
};
