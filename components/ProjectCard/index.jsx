import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ title, img, demoLink, repoLink, children, type }) => {
  return (
    <div className={`projectCardSingleContainer ${type || ""}`}>
      <div className="projectCardSingleLeftSide">
        <Image src={img} alt="Captura de pantalla del projecto" />
      </div>
      <div className="projectCardSingleRightSide">
        <h3>{title}</h3>
        <div className="projectCardSingleDescription">{children}</div>
        <div className="projectCardSingleBtnContainer">
          <Link href={demoLink}>
            <a className="btn" target="_blank">
              Ver demo
            </a>
          </Link>
          <Link href={repoLink}>
            <a className="btn" target="_blank">
              Repositorio
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
