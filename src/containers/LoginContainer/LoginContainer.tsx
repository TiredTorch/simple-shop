"use client";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { Button } from "@/components";

export const LoginContainer = () => {
    const router = useRouter();

    const handleAuth = useCallback(() => {
        router.push("/en/profile");
    }, [router]);

    return (
        <div className="flex w-full h-full justify-center items-center">
            <Button buttonVariation="authButton" onClick={handleAuth}>
                Log in via google
            </Button>
        </div>
    );
};
