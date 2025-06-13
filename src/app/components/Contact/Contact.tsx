// Dados mockados para lista de projetos (temporário)
import { contactData } from "./contactData";
import ContactList from "./ContactList";

export default function Contact() {
    return (
        <section id="contact" className="bg-section-primary bg-with-contact flex flex-col justify-center items-center w-full min-h-screen">
            <div data-aos="fade-up" className="max-w-[600px] flex flex-col justify-center ">
                <h1 className="flex text-[28px] sm:text-[32px] md:text-[48px] gap-x-2 text-center mb-10">
                    <span className="text-primary">VAMOS </span>
                    <span className="text-highlight ">CONVERSAR?</span>
                </h1>
                <ContactList listContact={contactData.listContact} />
            </div>
        </section>
    )
}