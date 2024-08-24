import { CategoryContext } from "@/context/CategoryContext";
import { useContext, useState } from "react";
import data from "../../data.json";

export const useJobs = () => {
  const [jobs, setJobs] = useState(data);
  const { selectedCategories } = useContext(CategoryContext);

  const filteredJobs = jobs.filter((job) =>
    job.languages.some((tag) => selectedCategories.includes(tag))
  );

  return { jobs, filteredJobs };
};
