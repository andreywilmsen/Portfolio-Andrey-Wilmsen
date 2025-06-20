"use client"

import clsx from "clsx";
import AboutBorder from "../About/AboutBorder";
import AboutParagraph from "../About/AboutParagraph";
import AboutTitle from "../About/AboutTitle";
import Button from "../Button";

export default function About() {
    return (
        <section id="about" className={clsx("flex flex-col justify-center items-center w-full min-h-screen")}>
            <div data-aos="fade-up" className={clsx("w-5/6 md:w-2/3 lg:w-3/6 xl:w-2/6")}>
                <AboutTitle />
                <div className={clsx("relative w-full px-5 py-5 text-justify my-3")}>
                    <AboutBorder left />
                    <AboutBorder right />
                    <AboutParagraph />
                </div>
                <div className={clsx("flex justify-center 2xl:justify-end my-10")}>
                    <Button hov aboutButtons name="Download CV" source={"download.png"} color="bg-vue" href="https://drive.google.com/file/d/1kBhxhpBqnZZ4H6WrDeenKrvKX9KLomS9/view?usp=drive_link" />
                </div>
            </div>
        </section>
    )
}
