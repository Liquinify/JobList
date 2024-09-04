import FilterList from "@/components/common/TagList/TagList";
import VacancyList from "@/components/common/VacancyList/VacancyList";
import { Footer } from "@/components/ui/Footer/Footer";
import Navbar from "@/components/ui/Navbar/Navbar";
import "@/styles/globals.css";
import "@/styles/normalize.css";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <Navbar user={user} />
      <FilterList />
      <VacancyList />
      <Footer />
    </>
  );
}
