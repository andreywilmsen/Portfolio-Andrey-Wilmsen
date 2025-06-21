"use client"
import { InputProps } from "./types";
import clsx from "clsx";

export default function Input({ tipo, place, small, medium, large }: InputProps) {

    return (
        <input className={clsx(small && "md:w-1/3", medium && "md:w-2/3", large && "w-full", tipo === "date" && "text-gray-500", "my-4 p-2 bg-white  rounded-2xl w-full")} type={tipo} placeholder={place} />
    );
}
