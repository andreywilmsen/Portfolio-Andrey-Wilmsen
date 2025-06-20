"use client"

import clsx from "clsx"

export default function ContactTitle() {
    return (
        <h1 className={clsx("flex text-[28px] sm:text-[32px] md:text-[48px] gap-x-2 text-center mb-10")}>
            <span className="text-primary">VAMOS </span>
            <span className="text-highlight ">CONVERSAR?</span>
        </h1>
    )
}