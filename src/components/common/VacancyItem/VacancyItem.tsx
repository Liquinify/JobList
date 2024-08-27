import React, { useContext } from "react";
import style from "./VacancyItem.module.scss";
import { Vacancy } from "../../../types/Vacancy";
import { FilterContext } from "@/context/FilterContext";

const VacancyItem = ({ vacancy }: { vacancy: Vacancy }) => {
  const { addNewTag } = useContext(FilterContext);

  return (
    <article className={style.card}>
      <section>
        <img src={vacancy.logo} />
        <header>
          <div>
            <h1>{vacancy.company}</h1>
            <h2>{vacancy.position}</h2>
          </div>
          <div>
            <p>{vacancy.postedAt}</p>
            <p>{vacancy.contract}</p>
            <p>{vacancy.location}</p>
          </div>
        </header>
      </section>
      <section>
        {vacancy.languages.map((language: string, index: number) => (
          <p key={index} onClick={() => addNewTag(language)}>
            {language}
          </p>
        ))}
      </section>
    </article>
  );
};

export default VacancyItem;
