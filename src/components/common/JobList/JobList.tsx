"use client";

import JobItem from "../JobItem/JobItem";
import style from "./JobList.module.scss";
import { useJobs } from "@/hooks/useJobs";

const JobList = () => {
  const { jobs, filteredJobs } = useJobs();
  return (
    <main className={style.grid}>
      {filteredJobs.length
        ? filteredJobs.map((job) => <JobItem key={job.id} job={job} />)
        : jobs.map((job) => <JobItem key={job.id} job={job} />)}
    </main>
  );
};

export default JobList;
