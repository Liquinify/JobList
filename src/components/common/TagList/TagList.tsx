"use client";

import React, { useContext } from "react";
import style from "./TagList.module.scss";
import { FilterContext } from "@/context/FilterContext";

const FilterList = () => {
  const { selectedTags, filterSelectedTag, clearSelectedTags } =
    useContext(FilterContext);

  return (
    <div className={style.list}>
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
