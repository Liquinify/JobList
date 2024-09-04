import Navbar from "@/components/ui/Navbar/Navbar";
import FavoriteVacancy from "@/pages/FavoriteVacancy/FavoriteVacancy";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import React from "react";

const page = async () => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <>
      <Navbar user={user} />
      <FavoriteVacancy />
    </>
  );
};

export default page;
