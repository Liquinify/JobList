"use client";

import React, { useContext } from "react";
import style from "./FilterList.module.scss";
import { CategoryContext } from "@/context/CategoryContext";

const FilterList = () => {
  const {
    selectedCategories,
    filterSelectedCategory,
    clearSelectedCategories,
  } = useContext(CategoryContext);

  return (
    <div className={style.list}>
      {selectedCategories.map((category, index: number) => (
        <div key={index}>
          <p>{category}</p>
          <button onClick={() => filterSelectedCategory(category)}>X</button>
        </div>
      ))}
      {selectedCategories.length > 0 && (
        <button onClick={clearSelectedCategories}>Clear</button>
      )}
    </div>
  );
};

export default FilterList;
