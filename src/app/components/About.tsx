"use client"

export default function About() {

    return (
        <section className="bg-section-secondary flex flex-col justify-center items-center w-full min-h-screen">
            <div className="w-5/6 md:w-2/3 lg:w-3/6 xl:w-2/6">
                <h1 className="text-secondary mx-2 my-3 text-3xl lg:text-4xl font-medium" >SOBRE</h1>
                <div className="w-full px-2 text-justify my-3">
                    <p className="text-secondary font-normal md:text-2xl">Sou um desenvolvedor Fullstack com experiência em <span className="text-highlight">Node.js, MongoDB, SQL, React, HTML e CSS</span>. Apaixonado por tecnologia e pela criação de soluções eficientes, foco no desenvolvimento backend e frontend, otimização de sistemas e implementação de APIs REST. Sempre buscando aprimorar habilidades e contribuir para projetos inovadores.</p>
                </div>
            </div>
        </section>
    )
}