import FilterList from "@/components/common/FilterList/FilterList";
import JobList from "@/components/common/JobList/JobList";
import Navbar from "@/components/ui/Navbar/Navbar";
import "@/styles/globals.css";
import "@/styles/normalize.css";

export default function Home() {
  return (
    <main>
      <Navbar />
      <FilterList />
      <JobList />
    </main>
  );
}
