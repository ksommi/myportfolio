import React from "react";
import Link from "next/link";
import Image from "next/image";
import linkedinSVG from "/public/svg/linkedin-brands.svg";
import githubSVG from "/public/svg/square-github-brands.svg";
import KSlogo from "/public/images/KSlogo.png";

const SideBar = () => {
  return (
    <div className="sidebarContainer">
      <Image src={KSlogo} width={53} height={88} alt="Logo KS" layout="fixed" />
      <ul className="listContainer">
        <Link href="/">
          <li>
            <a>Inicio</a>
          </li>
        </Link>
        <Link href="/skills">
          <li>
            <a>Habilidades</a>
          </li>
        </Link>
        <Link href="/projects">
          <li>
            <a>Proyectos</a>
          </li>
        </Link>
        <Link href="/about">
          <li>
            <a>Acerca de mi</a>
          </li>
        </Link>
        <Link href="/contact">
          <li>
            <a>Contacto</a>
          </li>
        </Link>
      </ul>
      <div className="socialContainer">
        <Link href="https://www.linkedin.com/in/ksommi/">
          <a target="_blank">
            <Image src={linkedinSVG} width={30} height={30} />
          </a>
        </Link>
        <Link href="https://github.com/ksommi">
          <a target="_blank">
            <Image src={githubSVG} width={30} height={30} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
