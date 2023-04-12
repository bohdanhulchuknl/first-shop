import React from "react";

type Props = {};

const ProductsFilterPanel = (props: Props) => {
  return (
    <div className="sticky top-0 z-20 p-2 bg-white">
      <span> Сортувати за:  </span>
      <button>Сортування за замовченням</button>
    </div>
  );
};

export default ProductsFilterPanel;
