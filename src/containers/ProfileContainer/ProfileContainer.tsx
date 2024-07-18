"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { Button, MiddlePositionContaner } from "@/components";

export const ProfileContainer = () => {
    const router = useRouter();

    const handleNavigateToCart = useCallback(() => {
        router.push("/en/cart");
    }, [router]);

    const handleNavigateToOrders = useCallback(() => {
        router.push("/en/status");
    }, [router]);

    return (
        <MiddlePositionContaner>
            <div className="flex w-full">
                <Image alt="avatar" src={""} className="w-3/5" />
                <div className="flex flex-col items-center w-2/5 gap-4">
                    <div className="text-4xl text-cyan-700 font-bold">
                        Username
                    </div>
                    <div className="text-2xl text-cyan-700 font-semibold">
                        Purchases:&nbsp;
                        <span className="text-cyan-800">2</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly w-full">
                <Button
                    buttonVariation="profileButton"
                    onClick={handleNavigateToCart}
                >
                    Cart
                </Button>
                <Button
                    buttonVariation="profileButton"
                    onClick={handleNavigateToOrders}
                >
                    Orders
                </Button>
            </div>
        </MiddlePositionContaner>
    );
};
