import Image from "next/image";
import Link from "next/link";
import { Button, MiddlePositionContaner } from "@/components";

export const ProfileContainer = () => {
    return (
        <MiddlePositionContaner>
            <div className="flex w-full sm:flex-row flex-col items-center gap-4">
                <Image alt="avatar" src={""} className="w-3/5" />
                <div className="flex flex-col items-center w-2/5 gap-4">
                    <div className="sm:text-4xl text-2xl text-cyan-700 font-bold">
                        Username
                    </div>
                    <div className="sm:text-2xl text-lg text-cyan-700 font-semibold">
                        Purchases:&nbsp;
                        <span className="text-cyan-800">2</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly w-full">
                <Link href={"/en/cart"}>
                    <Button buttonVariation="profileButton">Cart</Button>
                </Link>
                <Link href={"/en/status"}>
                    <Button buttonVariation="profileButton">Orders</Button>
                </Link>
            </div>
        </MiddlePositionContaner>
    );
};
