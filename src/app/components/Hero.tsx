"use client"

import Button from "./Button"

export default function Hero() {

    return (
        <section className="flex flex-col justify-center items-center w-full bg-section-primary h-dvh">
            <div className=" flex justify-center items-center w-[600px] flex-col">
                <h1 className="flex gap-x-4 items-center text-[64px] mb-1 h-[118px]">
                    <span className="text-primary">ANDREY </span>
                    <span className="text-highlight ">WILMSEN</span>
                </h1>
                <h2 className="text-text-secondary mb-8 text-2xl">Desenvolvedor Fullstack - Node.Js / React.Js</h2>
                <div className="flex flex-row justify-between md:justify-center items-center h-24 w-[128px]">
                    <div>
                        <Button source="github.png" name="Github" color="bg-github" />
                    </div>
                    <div>
                        <Button source="linkedin.png" name="Linkedin" color="bg-linkedin" />
                    </div>
                </div>
            </div>
        </section>
    )
}