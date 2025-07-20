import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <header className="px-5 py-5 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" height={30} width={144} />
                </Link>
            </nav>
        </header>
    );
};

export default Navbar;
