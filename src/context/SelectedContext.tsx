"use client";

import { Vacancy } from "@/types/Vacancy";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface SelectedContext {
  selectedVacancies: Vacancy[];
  setSelectedVacancies: Dispatch<SetStateAction<Vacancy[]>>;
  addSelectedVacancy: (vacancy: Vacancy) => void;
}

const SelectedContext = createContext<SelectedContext>({} as SelectedContext);

const SelectedProvider = ({ children }: { children: ReactNode }) => {
  const [selectedVacancies, setSelectedVacancies] = useState<Vacancy[]>([]);

  const addSelectedVacancy = (vacancy: Vacancy) => {
    if (!selectedVacancies.includes(vacancy)) {
      setSelectedVacancies((prevState) => [...prevState, vacancy]);
    } else {
      setSelectedVacancies((prevState) =>
        prevState.filter((state) => state !== vacancy)
      );
    }
  };

  return (
    <SelectedContext.Provider
      value={{ selectedVacancies, setSelectedVacancies, addSelectedVacancy }}
    >
      {children}
    </SelectedContext.Provider>
  );
};

export { SelectedContext, SelectedProvider };
