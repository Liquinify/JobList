"use client";

import { createContext, ReactNode, useState } from "react";

type CategoryContext = {
  selectedCategories: string[];
  addNewCategory: (name: string) => void;
  filterSelectedCategory: (name: string) => void;
  clearSelectedCategories: () => void;
};

const CategoryContext = createContext<CategoryContext>({} as CategoryContext);

const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const addNewCategory = (name: string) => {
    if (!selectedCategories.includes(name)) {
      setSelectedCategories((prevState) => [...prevState, name]);
    }
  };

  const filterSelectedCategory = (name: string) => {
    setSelectedCategories((prevState) =>
      prevState.filter((category) => category !== name)
    );
  };

  const clearSelectedCategories = () => {
    setSelectedCategories((prevState) => (prevState = []));
  };

  return (
    <CategoryContext.Provider
      value={{
        selectedCategories,
        addNewCategory,
        filterSelectedCategory,
        clearSelectedCategories,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryContext, CategoryProvider };
