import About from "./About/About";
import Projects from './Projects/Projects';

export default function PageBody() {
  return (<>
    {/* Bloco com fundo em camada separada */}
    <div className="relative w-full bg-section-secondary">

      {/* Conteúdo principal acima da imagem */}
      <div className="relative z-10 w-full min-h-screen bg-section-secondary bg-with-opacity">
        <About />
        <Projects />
      </div>
    </div>
  </>
  );
}
