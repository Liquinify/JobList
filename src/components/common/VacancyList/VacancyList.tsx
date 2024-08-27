"use client";

import { useVacancies } from "@/hooks/useVacancies";
import VacancyItem from "../VacancyItem/VacancyItem";
import style from "./VacancyList.module.scss";

const VacancyList = () => {
  const { vacancies, filteredTags, searchValue } = useVacancies();
  return (
    <main className={style.grid}>
      {filteredTags?.length
        ? filteredTags
            .filter((vacancy) =>
              vacancy.position.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((vacancy) => (
              <VacancyItem key={vacancy.id} vacancy={vacancy} />
            ))
        : vacancies
            ?.filter((vacancy) =>
              vacancy.position.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((vacancy) => (
              <VacancyItem key={vacancy.id} vacancy={vacancy} />
            ))}
    </main>
  );
};

export default VacancyList;
