import ProjectCard from "../ProjectCard";
import ahorcadoBack from "/public/images/Ahorcado.png";
import encriptadorBack from "/public/images/Encriptador.png";
import kevcommerceBack from "/public/images/kev-commerce.netlify.app.png";

const Projects = () => {
  return (
    <div className="projectsContainer">
      <h2 className="projectsTitle">Proyectos</h2>
      <p className="projectsDescription">
        Estos son los proyectos personales que tengo <i>finalizados</i> hasta el momento.
      </p>
      <div className="projectsCardsContainer">
        <ProjectCard
          title="E-commerce React"
          img={kevcommerceBack}
          demoLink="https://kev-commerce.netlify.app/"
          repoLink="https://github.com/ksommi/project-class2"
          type={"full"}
        >
          <p>
            Esta App que simula ser un e-commerce muestra los productos, los
            filtra por categoria y se maneja con un carrito de compras.
          </p>
        </ProjectCard>
        <div className="projectCardsSquares">
          <ProjectCard
            title="Desafío Nº 2 de JavaScript del proyecto ONE (Oracle Next Education) en
            Alura Latam."
            img={ahorcadoBack}
            demoLink="https://ksommi.github.io/Ahorcado/"
            repoLink="https://github.com/ksommi/Ahorcado"
            type={"square"}
          >
            <p>
              Consta del famoso juego del ahorcado, el cual se puede jugar con
              teclado fisico en PC y con un teclado tactil en Mobile.
            </p>
          </ProjectCard>
          <ProjectCard
            title="Desafío Nº 1 de JavaScript del proyecto ONE (Oracle Next Education) en
            Alura Latam."
            img={encriptadorBack}
            demoLink="https://ksommi.github.io/Encriptador/"
            repoLink="https://github.com/ksommi/Encriptador"
            type={"square"}
          >
            <p>
              Su función es transformar un texto para <i>encriptarlo</i> y
              viceversa.
            </p>
          </ProjectCard>
        </div>
      </div>
    </div>
  );
};

export default Projects;
