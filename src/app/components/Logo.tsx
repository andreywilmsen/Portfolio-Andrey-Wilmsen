
import clsx from "clsx";
import { LogoProps } from "./types";

export default function Logo({ hidden }: LogoProps) {
    return (
        <div className={clsx(hidden && "hidden", "px-3 md:flex items-center")}>
            <h1 className="text-2xl font-semibold">
                <span className="text-white">A</span>
                <span className="text-highlight">W</span>
            </h1>
        </div>
    );
}
