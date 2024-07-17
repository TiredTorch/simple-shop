"use client";
import { useRouter } from "next/navigation";
import { Button, Logo } from "@/components";

export const Header = () => {
    const router = useRouter();

    const navigateToLoginPage = () => {
        router.push("/en/login");
    };

    return (
        <div className="w-full h-[6rem] bg-slate-500 text-cyan-400 flex justify-between items-center px-20">
            <Logo />
            <Button
                buttonVariation="headerButton"
                onClick={navigateToLoginPage}
            >
                Log in
            </Button>
        </div>
    );
};
