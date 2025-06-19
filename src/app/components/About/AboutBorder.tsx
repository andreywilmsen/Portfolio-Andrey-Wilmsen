"use client"

import clsx from "clsx";
import { BorderProps } from "./types";

export default function AboutBorder({ left, right }: BorderProps) {
    return (
        <span className={clsx("absolute w-20 h-20 border-highlight", left && "bottom-0 right-0 border-b-2 border-r-2", right && "top-0 left-0 border-t-2 border-l-2")}></span>
    )
}
