"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import style from "./Navbar.module.scss";
import { useVacancies } from "@/hooks/useVacancies";
import { CiStar, CiLight } from "react-icons/ci";
import Link from "next/link";
import { SelectedContext } from "@/context/SelectedContext";
import {
  createClientComponentClient,
  Session,
} from "@supabase/auth-helpers-nextjs";

const Navbar = ({ session }: { session: Session | null }) => {
  const { setSearchValue } = useVacancies();
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const { selectedVacancies } = useContext(SelectedContext);
  const supabase = createClientComponentClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className={style.navbar} ref={ref}>
      <section>
        <Link href="/">
          <h1>Joblist</h1>
        </Link>
        <input
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </section>
      <section>
        <Link href="/favorites">
          <CiStar fontSize={32} />
          {selectedVacancies.length > 0 ? selectedVacancies.length : null}
        </Link>

        <div>
          <CiLight fontSize={23} onClick={() => setDropdown((prev) => !prev)} />
        </div>
        {dropdown && (
          <article className={style.dropdown}>
            <p>Light</p>
            <p>Dark</p>
            <p>System</p>
          </article>
        )}
        {session ? (
          <button className={style.button} onClick={handleSignOut}>
            Logout
          </button>
        ) : (
          <Link href="/auth/login">
            <button className={style.button}>Login</button>
          </Link>
        )}
      </section>
    </header>
  );
};

export default Navbar;
