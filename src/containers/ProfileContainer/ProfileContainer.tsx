import Image from "next/image";
import { Button, CreditCardForm } from "@/components";

export const ProfileContainer = () => {
    return (
        <div className="h-[calc(100dvh-6rem)] bg-slate-400 w-2/3 m-auto px-4 py-6 flex flex-col items-center justify-between">
            <div className="flex w-full">
                <Image alt="avatar" src={""} className="w-3/5" />
                <div className="flex flex-col items-center w-2/5 gap-4">
                    <div className="text-4xl text-cyan-700 font-bold">
                        Username
                    </div>
                    <div //TODO space via escape sec
                        className="text-2xl text-cyan-700 font-semibold"
                    >
                        Purchases:
                        <span className="text-cyan-800">2</span>
                    </div>
                </div>
            </div>
            <div>
                <CreditCardForm />
            </div>
            <div className="flex justify-evenly w-full">
                <Button buttonVariation="profileButton">Cart</Button>
                <Button buttonVariation="profileButton">Orders</Button>
            </div>
        </div>
    );
};
