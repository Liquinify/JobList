import Link from "next/link";
import React from "react";
import { LuGithub } from "react-icons/lu";
import style from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <Link href="https://github.com/Liquinify/Jobist">
        <LuGithub fontSize={20} />
      </Link>
      <p>
        Built by <Link href="https://github.com/Liquinify">Liquinify</Link>
      </p>
    </footer>
  );
};
