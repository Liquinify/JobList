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
      {selectedVacancies.length > 0 ? (
        selectedVacancies.map((vacancy: Vacancy) => (
          <VacancyItem key={vacancy.id} vacancy={vacancy} />
        ))
      ) : (
        <section>
          <h2>You have not yet added vacancies to your favorites</h2>
          <h3>
            Find interesting vacancies among the listed ones or use the search
            function
          </h3>
        </section>
      )}
    </main>
  );
};

export default FavoriteVacancy;
