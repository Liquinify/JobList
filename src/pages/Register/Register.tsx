"use client";

import React, { FormEvent, useState } from "react";
import style from "./Register.module.scss";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const Register = () => {
  const supabase = createClientComponentClient();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };

  const handleGitHubSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };

  const handleGoogleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();
    await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          username: formData.username,
        },
      },
    });
  };
  return (
    <main className={style.form}>
      <Link href="/">
        <IoMdClose fontSize={40} />
      </Link>
      <article>
        <section>
          <h1>Register</h1>
          <form onSubmit={handleSignUp}>
            <input
              name="username"
              placeholder="username"
              required
              onChange={handleInputChange}
              value={formData.username}
            />
            <input
              name="email"
              placeholder="email"
              required
              onChange={handleInputChange}
              value={formData.email}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              required
              onChange={handleInputChange}
              value={formData.password}
            />
            <div>
              <button type="submit">Sign up</button>
            </div>
            <footer>
              <div onClick={handleGoogleSignIn}>
                <FcGoogle fontSize={25} />
                <p>Continue with Google</p>
              </div>
              <div onClick={handleGitHubSignIn}>
                <FaGithub fontSize={25} />
                <p>Continue with GitHub</p>
              </div>
            </footer>
          </form>
        </section>
      </article>
      <p>
        <Link href="/auth/login">Already have an account? Login</Link>
      </p>
    </main>
  );
};

export default Register;
