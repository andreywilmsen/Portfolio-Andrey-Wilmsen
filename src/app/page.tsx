import Menu from "./components/Header/Menu";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from './components/Projects/Projects';
import Footer from "./components/Footer/Footer";


export default function Home() {
  return (
    <div>
      <Menu items={["Home", "Sobre", "Repositório"]} />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
