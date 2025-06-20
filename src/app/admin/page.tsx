import Header from "../components/Header/Menu";
import { menuItems } from "./types";

export default function Admin() {
    return (
        <section>
            <Header items={menuItems} admin />
            <div className="md:ml-50 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <h1>Admin</h1>
            </div>
        </section>
    );
}
