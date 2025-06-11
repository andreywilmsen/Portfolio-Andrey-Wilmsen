import Menu from "./components/Header/Menu";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";


export default function Home() {
  return (
    <div>
      <Menu items={["Home", "Sobre", "Repositório"]} />
      <Hero />
      <About />
    </div>
  );
}
