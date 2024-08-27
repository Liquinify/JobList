import FilterList from "@/components/common/TagList/TagList";
import VacancyList from "@/components/common/VacancyList/VacancyList";
import Navbar from "@/components/ui/Navbar/Navbar";
import "@/styles/globals.css";
import "@/styles/normalize.css";

export default function Home() {
  return (
    <main>
      <Navbar />
      <FilterList />
      <VacancyList />
    </main>
  );
}
