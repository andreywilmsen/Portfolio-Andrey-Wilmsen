import { ContactListData } from "./types";

export default function ContactList({ listContact }: ContactListData) {
    return (
        <div>
            {listContact.map((contact, index) => (
                <a key={index} href={contact.link} target="_blank" rel="noopener noreferrer" className="flex items-center hover:scale-105 transform transition-all duration-300 my-7 w-full justify-start">
                    <img src={contact.source} alt={contact.name} className="w-[30px] h-[30px] mr-5" />
                    <span className="text-[14px] sm:text-[16px] md:text-[20px] text-secondary">{contact.name}</span>
                </a>
            ))}
        </div>
    );
}
