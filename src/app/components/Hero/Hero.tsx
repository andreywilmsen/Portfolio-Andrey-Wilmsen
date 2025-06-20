"use client"

import clsx from "clsx";
import Button from "../Button";
import TitleHero from "../Hero/TitleHero";
import CaptionHero from "../Hero/CaptionHero";

export default function Hero() {

    return (
        <section id="hero" className={clsx("bg-section-primary bg-with-opacity_hero flex flex-col justify-center items-center w-full min-h-screen")}>
            <div data-aos="fade-up" className={clsx("flex flex-col justify-center items-center max-w-[600px] w-[90%]")}>
                <TitleHero />
                <CaptionHero />
                <div className="flex justify-center items-center gap-4 mt-4">
                    <Button hov hidden heroButtons source="github.png" name="Github" color="bg-github" href="https://github.com/andreywilmsen" />
                    {/* <Button hov hidden heroButtons source="linkedin.png" name="Linkedin" color="bg-linkedin" href="https://www.linkedin.com/in/andrey-wilmsen-de-paula-875504370/" /> */}
                    <Button hov hidden heroButtons source="linkedin.png" name="Linkedin" color="bg-linkedin" href="https://github.com/andreywilmsen" />
                </div>
            </div>
        </section>
    )
}