import Menu from "./components/Menu";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Menu items={["Home", "Sobre", "Repositório"]} />
      <Hero/>
    </div>
  );
}
