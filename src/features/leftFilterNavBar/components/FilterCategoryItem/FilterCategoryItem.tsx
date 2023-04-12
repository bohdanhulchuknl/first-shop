import React, { useMemo } from "react";

type Props = {
  item: string;
  toggleItemHandler: (value: string) => void;
  selectedItems: string[];
};

const FilterCategoryItem = ({
  toggleItemHandler,
  item,
  selectedItems,
}: Props) => {
  const isSelected = useMemo(
    () => selectedItems.includes(item),
    [selectedItems]
  );

  return (
    <span onClick={() => toggleItemHandler(item)} className={`cursor-pointer pl-2 ${isSelected ? 'text-orange-500': ""}`}>
      {item}
    </span>
  );
};

export default FilterCategoryItem;
