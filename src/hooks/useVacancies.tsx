import { useContext } from "react";
import { useQuery } from "react-query";
import { getVacancies } from "@/api/getVacancies";
import { FilterContext } from "@/context/FilterContext";

export const useVacancies = () => {
  const {
    data: vacancies,
    isError,
    isLoading,
  } = useQuery("vacancies", getVacancies);
  const { searchValue, setSearchValue, selectedTags } =
    useContext(FilterContext);

  const filteredTags = vacancies?.filter((job) =>
    job.languages.some((tag: string) => selectedTags.includes(tag))
  );

  return {
    vacancies,
    filteredTags,
    searchValue,
    setSearchValue,
    isLoading,
    isError,
  };
};
