"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface CategoryContext {
  selectedTags: string[];
  addNewTag: (name: string) => void;
  filterSelectedTag: (name: string) => void;
  clearSelectedTags: () => void;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

const FilterContext = createContext<CategoryContext>({} as CategoryContext);

const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const addNewTag = (name: string) => {
    if (!selectedTags.includes(name)) {
      setSelectedTags((prevState) => [...prevState, name]);
    }
  };

  const filterSelectedTag = (name: string) => {
    setSelectedTags((prevState) =>
      prevState.filter((category) => category !== name)
    );
  };

  const clearSelectedTags = () => {
    setSelectedTags((prevState) => (prevState = []));
  };

  return (
    <FilterContext.Provider
      value={{
        selectedTags,
        addNewTag,
        filterSelectedTag,
        clearSelectedTags,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterProvider };
