"use client";

import React, { useContext } from "react";
import style from "./TagList.module.scss";
import { FilterContext } from "@/context/FilterContext";
import Loader from "@/components/ui/Loader/Loader";
import { useVacancies } from "@/hooks/useVacancies";

const FilterList = () => {
  const { selectedTags, filterSelectedTag, clearSelectedTags } =
    useContext(FilterContext);
  const { isLoading } = useVacancies();

  return (
    <div className={style.list}>
      {isLoading && <Loader />}
      {selectedTags.map((tag, index: number) => (
        <div key={index}>
          <p>{tag}</p>
          <button onClick={() => filterSelectedTag(tag)}>X</button>
        </div>
      ))}
      {selectedTags.length > 0 && (
        <button onClick={clearSelectedTags}>Clear</button>
      )}
    </div>
  );
};

export default FilterList;
