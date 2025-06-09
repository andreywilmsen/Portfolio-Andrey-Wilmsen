"use client"

import Button from "./Button"

export default function Hero() {

    return (
        <section className="flex flex-col justify-center items-center w-full bg-section-primary h-dvh">
            <div className=" flex justify-center items-center w-full max-w-[600px] flex-col">
                <h1 className="text-[40px] flex gap-x-2 text-center md:text-[64px] mb-2">
                    <span className="text-primary">ANDREY </span>
                    <span className="text-highlight ">WILMSEN</span>
                </h1>
                <h2 className="text-[16px] text-text-secondary mb-6 text-center md:text-2xl">
                    Desenvolvedor Fullstack - Node.Js / React.Js</h2>
                <div className="flex gap-4 justify-center items-center mt-4">
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