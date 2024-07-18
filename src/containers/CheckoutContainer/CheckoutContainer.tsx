"use client";
import { CheckoutForm, MiddlePositionContaner } from "@/components";

export const CheckoutContainer = () => {
    return (
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
