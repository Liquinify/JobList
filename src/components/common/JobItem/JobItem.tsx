import React, { useContext } from "react";
import style from "./JobItem.module.scss";
import { CategoryContext } from "@/context/CategoryContext";
import { Job } from "../../../types/JobItem";

const JobItem = ({ job }: { job: Job }) => {
  const { addNewCategory } = useContext(CategoryContext);

  return (
    <article className={style.card}>
      <section>
        <img src={job.logo} />
        <header>
          <div>
            <h1>{job.company}</h1>
            <h2>{job.position}</h2>
          </div>
          <div>
            <p>{job.postedAt}</p>
            <p>{job.contract}</p>
            <p>{job.location}</p>
          </div>
        </header>
      </section>
      <section>
        {job.languages.map((language: string, index: number) => (
          <p key={index} onClick={() => addNewCategory(language)}>
            {language}
          </p>
        ))}
      </section>
    </article>
  );
};

export default JobItem;
