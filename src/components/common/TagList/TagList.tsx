"use client";

import React, { useContext } from "react";
import style from "./TagList.module.scss";
import { FilterContext } from "@/context/FilterContext";
import { IoMdClose } from "react-icons/io";

const FilterList = () => {
  const { selectedTags, filterSelectedTag, clearSelectedTags } =
    useContext(FilterContext);

  return (
    <main className={style.list}>
      <section>
        {selectedTags.map((tag, index: number) => (
          <div key={index}>
            <p>{tag}</p>
            <button onClick={() => filterSelectedTag(tag)}>
              <IoMdClose fontSize={20} />
            </button>
          </div>
        ))}
      </section>
      {selectedTags.length > 0 && (
        <button onClick={clearSelectedTags}>Clear</button>
      )}
    </main>
  );
};

export default FilterList;
