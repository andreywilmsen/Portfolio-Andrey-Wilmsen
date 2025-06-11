"use client"

import Button from "../Button";
import TitleHero from "../Hero/TitleHero";
import CaptionHero from "../Hero/CaptionHero";

export default function Hero() {

    return (
        <section className="bg-section-primary flex flex-col justify-center items-center w-full min-h-screen">
            <div className="flex flex-col justify-center items-center max-w-[600px] w-[90%]">
                <TitleHero />
                <CaptionHero />
                <div className="flex justify-center items-center gap-4 mt-4">
                    <Button source="github.png" name="Github" color="bg-github" href="https://github.com/andreywilmsen" />
                    <Button source="linkedin.png" name="Linkedin" color="bg-linkedin" href="https://www.linkedin.com/in/andrey-wilmsen-de-paula-2b1354345/" />
                </div>
            </div>
        </section>
    )
}