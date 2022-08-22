import SkillCard from "../SkillCard";
import nextSVG from "/public/svg/next.svg";
import photoshopSVG from "/public/svg/photoshop.svg";
import githubSVG from "/public/svg/square-github-brands.svg";
import firebaseSVG from "/public/svg/firebase.svg";
import htmlSVG from "/public/svg/html.svg";
import cssSVG from "/public/svg/css.svg";
import javascriptSVG from "/public/svg/javascript.svg";
import reactSVG from "/public/svg/react.svg";

const Skills = () => {
  return (
    <div className="skillsContainer">
      <h2>Habilidades</h2>
      <p>
        Estas son las herramientas que manejo y que día a día sigo
        perfeccionando.
      </p>
      <div className="skillCardContainer">
        <SkillCard title="HTML" img={htmlSVG} />
        <SkillCard title="CSS" img={cssSVG} />
        <SkillCard title="JavaScript" img={javascriptSVG} />
        <SkillCard title="React" img={reactSVG} />
        <SkillCard title="Github" img={githubSVG} invertColor="invert" />
        <SkillCard title="Firebase" img={firebaseSVG} />
        <SkillCard title="NextJs" img={nextSVG} invertColor="invert" />
        <SkillCard title="Photoshop" img={photoshopSVG} />
      </div>
    </div>
  );
};

export default Skills;
