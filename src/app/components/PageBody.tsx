import About from "./About/About";
import Projects from './Projects/Projects';

export default function PageBody() {
  return (<>
    {/* Bloco com fundo em camada separada */}
    <div className="relative w-full">

      {/* Camada de fundo com opacidade */}
      <div className="absolute inset-0 bg-cover bg-center opacity-[0.5%] z-30 w-full lg:w-5/6" style={{ backgroundImage: 'url("/icons/fundo_wing_portfolio.png")' }} />

      {/* Conteúdo principal acima da imagem */}
      <div className="relative z-10">
        <About />
        <Projects />
      </div>
    </div>
  </>
  );
}
