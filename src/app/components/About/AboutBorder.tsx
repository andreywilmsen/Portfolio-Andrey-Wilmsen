"use client"

interface BorderProps {
    left?: boolean;
    right?: boolean;
}

export default function AboutBorder({ left, right }: BorderProps) {
    return (
        <span className={`absolute ${left && "bottom-0 right-0"} ${right && "top-0 left-0"} w-20 h-20 ${left && "border-b-2 border-r-2"} ${right && "border-t-2 border-l-2"} border-highlight`}></span>
    )
}
