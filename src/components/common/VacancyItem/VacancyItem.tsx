import React, { useContext } from "react";
import style from "./VacancyItem.module.scss";
import { Vacancy } from "../../../types/Vacancy";
import { FilterContext } from "@/context/FilterContext";
import { SelectedContext } from "@/context/SelectedContext";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const VacancyItem = ({ vacancy }: { vacancy: Vacancy }) => {
  const { addNewTag } = useContext(FilterContext);
  const { selectedVacancies, addSelectedVacancy } = useContext(SelectedContext);

  const timeAgo = (date: React.ReactNode) => {
    const now = new Date();
    const past = new Date(date);
    const diff = now - past; // Difference in milliseconds

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} days ago`;
    } else if (hours > 0) {
      return `${hours} hours ago`;
    } else if (minutes > 0) {
      return `${minutes} minutes ago`;
    } else {
      return "just now";
    }
  };

  return (
    <article className={style.card}>
      <section>
        <img src={vacancy.company_logo} alt={`logo`} />
        <header>
          <div>
            <h1>{vacancy.company_name}</h1>
            <h2>{vacancy.position}</h2>
          </div>
          <div>
            <p>{vacancy.contract}</p>
            <p>{vacancy.location}</p>
            <p>{timeAgo(vacancy.created_at)}</p>
          </div>
        </header>
      </section>
      <section>
        {vacancy.languages.map((language: string, index: number) => (
          <p
            className={style.languageTag}
            data-testid="language-div"
            key={index}
            onClick={() => addNewTag(language)}
          >
            {language}
          </p>
        ))}
      </section>
      {!selectedVacancies.includes(vacancy) ? (
        <CiStar
          fontSize={25}
          className={style.starButton}
          onClick={() => addSelectedVacancy(vacancy)}
        />
      ) : (
        <FaStar
          fontSize={25}
          className={style.starButton}
          onClick={() => addSelectedVacancy(vacancy)}
          color={"orange"}
        />
      )}
    </article>
  );
};

export default VacancyItem;
