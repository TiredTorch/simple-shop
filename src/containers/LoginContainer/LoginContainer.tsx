import Link from "next/link";
import { Button } from "@/components";

export const LoginContainer = () => {
    const router = useRouter();

    const handleAuth = useCallback(() => {
        router.push("/en/profile");
    }, [router]);

    return (
        <div className="flex w-full h-full justify-center items-center">
            <Link href={"/en/profile"}>
                <Button buttonVariation="authButton">Log in via google</Button>
            </Link>
        </div>
    );
};
