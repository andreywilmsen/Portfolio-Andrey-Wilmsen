import Menu from "./components/Header/Menu";
import Hero from "./components/Hero/Hero";
import PageBody from "./components/PageBody";
import Footer from "./components/Footer/Footer";
import AnchorButton from "./components/AnchorButton";
import Contact from "./components/Contact/Contact";
// Dados mockados para menu (temporário)
import { menuItems } from "./types";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Menu items={menuItems} />
      <Hero />
      <PageBody />
      <Contact />
      <Footer />
      <AnchorButton />
    </div>
  );
}
