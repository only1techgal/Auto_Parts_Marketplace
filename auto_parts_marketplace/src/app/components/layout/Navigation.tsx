"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
    const pathname = usePathname();
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-6 text-white">
                <li>
                    <Link href="/" className={pathname === "/" ? "font-bold" : ""}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/marketplace/parts" className={pathname.includes("parts") ? "font-bold" : ""}>
                        Parts
                    </Link>
                </li>
                <li>
                <Link href="/marketplace/sell" className={pathname.includes("sell") ? "font-bold" : ""}>
                        Sell
                    </Link>
                </li>
                <li>
                <Link href="/dashboard" className={pathname.includes("dashboard") ? "font-bold" : ""}>
                        Dashboard
                    </Link>
                </li>
                <li>
                <Link href="/auth/login" className={pathname.includes("login") ? "font-bold" : ""}>
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;