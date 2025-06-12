"use client"

import Logo from "../Logo"
import FooterButtons from "./FooterButtons";

export default function Footer() {
    return (
        <footer className={`flex bg-black flex-row min-h-14 items-center justify-center`}>
            <div className="w-1/6">
                <Logo hidden />
            </div>
            <div className="flex w-full justify-center items-center gap-5">
                <FooterButtons />
            </div>
            <div className="w-1/6"></div>
        </footer>
    )
}