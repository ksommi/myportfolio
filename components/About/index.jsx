import Image from "next/image";
import meJPG from "/public/images/me.jpg";
import javascriptSVG from "/public/svg/javascript.svg";
import reactSVG from "/public/svg/react.svg";

const About = () => {
  return (
    <div className="aboutContainer">
      <h2>Acerca de mi</h2>
      <div className="aboutMe">
        <div className="aboutMeImage">
          <Image
            src={meJPG}
            width={400}
            height={450}
            objectFit="cover"
            layout="responsive"
            alt="Foto de perfil"
          />
        </div>
        <div className="aboutMeText">
          <p>
            Mi nombre completo es Kevin Hernan Sommi, tengo 25 años y
            actualmente vivo en la ciudad de: <br />
            📍 La Plata, Buenos Aires, Argentina.
            <br />
            <br />
            En el año 2018 comencé mis estudios de Maquetado Web como alumno en
            Educacion IT 💻. Tiempo después tuve la oportunidad de retomar este
            camino de manera autodidacta y fui haciendo nuevos cursos. Sumado a
            esto, me dediqué a realizar prácticas de forma independiente
            enfocandome en Desarrollo Front-End.
            <br />
            <br />
            Ampliando aún mis conocimientos en JavaScript{" "}
            <Image
              src={javascriptSVG}
              width={18}
              height={18}
              alt="javascript icon"
            />{" "}
            y React
            <Image src={reactSVG} width={18} height={18} alt="react icon" /> me
            encuentro en busqueda de mi primera experiencia laboral en el mundo
            de la programación y el desarrollo web. Sin mucho más que agregar,
            gracias por leerme y tomarte el tiempo de revisar mi portfolio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
