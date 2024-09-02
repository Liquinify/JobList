import Login from "@/pages/Login/Login";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.auth.getSession();

  if (data.session) {
    redirect("/");
  }

  return <Login />;
};

export default page;
