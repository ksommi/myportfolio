import Image from "next/image";
import meJPG from "/public/images/me.jpg";
import javascriptSVG from "/public/svg/javascript.svg";
import reactSVG from "/public/svg/react.svg";

const About = () => {
  return (
    <div className="aboutContainer">
      <h2>Acerca de mi</h2>
      <div className="aboutMe">
        <Image src={meJPG} width={400} height={400} layout="intrinsic" />
        <div className="aboutMeText">
          <p>
            Mi nombre completo es Kevin Hernan Sommi, tengo 25 años y
            actualmente vivo en la ciudad de <br />
            📍 La Plata, Buenos Aires, Argentina.
            <br />
            <br />
            En el año 2018 realicé un curso de Maquetado Web en Educacion IT 💻.
            Después de un tiempo, a mediados del 2021 tuve la oportunidad de
            retomar mis estudios de manera autodidacta y también realizando
            varios cursos y practicas de forma totalmente independiente
            enfocandome en Desarrollo Front-End.
            <br />
            <br />
            Ampliando aún mis conocimientos en JavaScript{" "}
            <Image src={javascriptSVG} width={18} height={18} /> y React
            <Image src={reactSVG} width={18} height={18} /> me encuentro en
            busqueda de mi primera experiencia laboral en el mundo de la
            programación y el desarrollo web. Sin mucho más que agregar, gracias
            por leerme y tomarte el tiempo de revisar mi Portfolio!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
