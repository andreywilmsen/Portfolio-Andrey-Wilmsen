// Dados mockados para lista de projetos (temporário)
import { contactData } from "./contactData";
import ContactList from "./ContactList";
import ContactTitle from "./ContactTitle";

export default function Contact() {
    return (
        <section id="contact" className="bg-section-primary bg-with-contact flex flex-col justify-center items-center w-full min-h-screen">
            <div data-aos="fade-up" className="max-w-[600px] flex flex-col justify-center ">
                <ContactTitle />
                <ContactList listContact={contactData.listContact} />
            </div>
        </section>
    )
}