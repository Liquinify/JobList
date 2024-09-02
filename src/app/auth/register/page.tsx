import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Register from "@/pages/Register/Register";

const page = async () => {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.auth.getSession();

  if (data.session) {
    redirect("/");
  }
  return <Register />;
};

export default page;
