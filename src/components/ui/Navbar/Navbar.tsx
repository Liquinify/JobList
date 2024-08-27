"use client";

import React, { useEffect, useRef, useState } from "react";
import style from "./Navbar.module.scss";
import { useVacancies } from "@/hooks/useVacancies";
import { CiStar, CiLight } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import Link from "next/link";

const Navbar = () => {
  const { setSearchValue } = useVacancies();
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <header className={style.navbar} ref={ref}>
      <section>
        <h1>Jobing</h1>
        <input
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </section>
      <section>
        <CiStar fontSize={30} />
        <Link href="https://github.com/Liquinify/Jobist">
          <LuGithub fontSize={18} />
        </Link>
        <div>
          <CiLight
            fontSize={23}
            onClick={() => setDropdown((state) => !state)}
          />
        </div>
        {dropdown && (
          <article className={style.dropdown}>
            <p>Light</p>
            <p>Dark</p>
            <p>System</p>
          </article>
        )}
        <button>Login</button>
      </section>
    </header>
  );
};

export default Navbar;
