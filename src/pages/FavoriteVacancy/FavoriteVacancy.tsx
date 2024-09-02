"use client";

import VacancyItem from "@/components/common/VacancyItem/VacancyItem";
import { SelectedContext } from "@/context/SelectedContext";
import { Vacancy } from "@/types/Vacancy";
import { useContext } from "react";
import style from "@/components/common/VacancyList/VacancyList.module.scss";

const FavoriteVacancy = () => {
  const { selectedVacancies } = useContext(SelectedContext);
  return (
    <main className={style.grid}>
      {selectedVacancies?.map((vacancy: Vacancy) => (
        <VacancyItem key={vacancy.id} vacancy={vacancy} />
      ))}
    </main>
  );
};

export default FavoriteVacancy;
