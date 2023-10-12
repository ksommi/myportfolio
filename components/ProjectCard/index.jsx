import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ title, img, demoLink, repoLink, children, type }) => {
	return (
		<div className={`projectCardSingleContainer ${type || ""}`}>
			<div className="projectCardSingleLeftSide">
				<Image
					src={img}
					width={400}
					alt="Captura de pantalla del projecto"
					style={{ objectFit: "cover", objectPosition: "center top" }}
				/>
			</div>
			<div className="projectCardSingleRightSide">
				<h3>{title}</h3>
				<div className="projectCardSingleDescription">{children}</div>
				<div className="projectCardSingleBtnContainer">
					<Link href={demoLink} className="btn" target="_blank">
						Ver demo
					</Link>
					<Link href={repoLink} className="btn" target="_blank">
						Repositorio
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
