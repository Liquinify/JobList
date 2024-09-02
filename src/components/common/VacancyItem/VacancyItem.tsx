import React, { useContext } from "react";
import style from "./VacancyItem.module.scss";
import { Vacancy } from "../../../types/Vacancy";
import { FilterContext } from "@/context/FilterContext";
import { SelectedContext } from "@/context/SelectedContext";

const VacancyItem = ({ vacancy }: { vacancy: Vacancy }) => {
  const { addNewTag } = useContext(FilterContext);
  const { addSelectedVacancy } = useContext(SelectedContext);

  return (
    <article className={style.card}>
      <section>
        <img src={vacancy.company_logo} />
        <header>
          <div>
            <h1>{vacancy.company_name}</h1>
            <h2>{vacancy.position}</h2>
          </div>
          <div>
            <p>{vacancy.created_at}</p>
            <p>{vacancy.contract}</p>
            <p>{vacancy.location}</p>
          </div>
        </header>
      </section>
      <section>
        {vacancy.languages.map((language: string, index: number) => (
          <p
            data-testid="language-div"
            key={index}
            onClick={() => addNewTag(language)}
          >
            {language}
          </p>
        ))}
      </section>
      <button onClick={() => addSelectedVacancy(vacancy)}>Star</button>
    </article>
  );
};

export default VacancyItem;
