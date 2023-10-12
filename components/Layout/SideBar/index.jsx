import React from "react";
import Link from "next/link";
import Image from "next/image";
import linkedinSVG from "/public/svg/linkedin-brands.svg";
import githubSVG from "/public/svg/square-github-brands.svg";
import KSlogo from "/public/images/KSlogo.png";
import ThemeChanger from "../ThemeChanger";

const SideBar = () => {
	return (
		<div className="sidebarContainer">
			<div className="sidebarLogoContainer">
				<Image alt="Logo KS" src={KSlogo} width={53} height={88} />
			</div>
			<ul className="listContainer">
				<Link href="/">
					<li>Inicio</li>
				</Link>
				<Link href="/skills">
					<li>Habilidades</li>
				</Link>
				<Link href="/projects">
					<li>Proyectos</li>
				</Link>
				<Link href="/about">
					<li>Acerca de mi</li>
				</Link>
				<Link href="/contact">
					<li>Contacto</li>
				</Link>
			</ul>
			<div className="socialContainer">
				<Link href="https://www.linkedin.com/in/ksommi/" target="_blank">
					<Image
						src={linkedinSVG}
						width={30}
						height={30}
						alt="Linkedin Icon"
					/>
				</Link>
				<Link href="https://github.com/ksommi" target="_blank">
					<Image
						src={githubSVG}
						width={30}
						height={30}
						alt="Github Icon"
					/>
				</Link>
			</div>
			<ThemeChanger />
		</div>
	);
};

export default SideBar;
