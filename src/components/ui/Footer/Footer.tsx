import Link from "next/link";
import React from "react";
import { LuGithub } from "react-icons/lu";
import style from "./Footer.module.scss";
import { LiaLinkedin } from "react-icons/lia";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <section>
        <div className={style.socialLinks}>
          <Link href="https://github.com/Liquinify/JobList">
            <LuGithub fontSize={20} />
          </Link>
          <Link href="https://www.linkedin.com/in/arian-amin-afshar-013406249/">
            <LiaLinkedin fontSize={20} />
          </Link>
        </div>
        <p>
          Built by <Link href="https://github.com/Liquinify">Liquinify</Link> ©
          2024
        </p>
      </section>
    </footer>
  );
};
