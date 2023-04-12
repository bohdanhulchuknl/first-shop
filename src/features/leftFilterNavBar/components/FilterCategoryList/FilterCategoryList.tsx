import React, { useState, useMemo } from "react";

import { FilterCategoryItem } from "../";

type Props = {
  categoryTitle: string;
  categoryItems: string[];
  toggleItemHandler: (value: string) => void;
  selectedItems: string[];
};

const FilterCategoryList = ({
  categoryTitle,
  categoryItems,
  toggleItemHandler,
  selectedItems,
}: Props) => {
  const [isShowItems, setIsShowItems] = useState(false);

  const hasSelectedItems = useMemo(
    () => selectedItems.length > 0,
    [selectedItems, categoryItems]
  );

  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>


  return (
    <div className="border-t-2 p-2">
      <div className="flex justify-between items-center pb-2">
        <h2 className={`font-semibold`}>{categoryTitle}</h2>
        <div
          className={`text-2xl cursor-pointer ${hasSelectedItems ? "text-orange-500" : ""}`}
          onClick={() => setIsShowItems((prev) => !prev)}
        >
          {isShowItems ? "-" : "+"}
        </div>
      </div>

      <div
        className={`${
          isShowItems ? "h-auto " : "h-0"
        } overflow-hidden transition flex flex-col items-start`}
      >
        {categoryItems.map((el) => (
          <FilterCategoryItem
            item={el}
            toggleItemHandler={toggleItemHandler}
            selectedItems={selectedItems}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterCategoryList;
