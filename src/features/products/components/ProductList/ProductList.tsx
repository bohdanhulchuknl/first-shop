import React, { useMemo } from "react";
//redux
import { useAppSelector } from "../../../../app/hooks";
import { selectMenShoes } from "../../productsSlice";
//components
import { ProductItem } from "../";

type Props = {};
const ProductList = (props: Props) => {
  const prodData = useAppSelector(selectMenShoes);
  const {
    values,
    selectedCategories,
    selectedCountries,
    selectedSizes,
    selectedVendors,
  } = useAppSelector((state) => state.leftFilterNavBar);

  console.log(prodData);

  const filtredProdDataByMaxValue = useMemo(
    () =>
      prodData?.filter(
        (el) => el.price >= values.min && el.price <= values.max
      ),
    [prodData, values]
  );

  const filtredProdDataByCategories = useMemo(
    () =>
      selectedCategories.length
        ? filtredProdDataByMaxValue?.filter((el) =>
            selectedCategories.includes(el.category)
          )
        : filtredProdDataByMaxValue,
    [filtredProdDataByMaxValue, selectedCategories]
  );

  const filtredProdDataByCountries = useMemo(
    () =>
      selectedCountries.length
        ? filtredProdDataByCategories?.filter((el) =>
            selectedCountries.includes(el.country)
          )
        : filtredProdDataByCategories,
    [filtredProdDataByCategories, selectedCountries]
  );

  const filtredProdDataBySizes = useMemo(
    () =>
      selectedSizes.length
        ? filtredProdDataByCountries?.filter((el) => {
            return el.sizes.filter((size) => selectedSizes.includes(size.size))
              .length;
          })
        : filtredProdDataByCountries,
    [filtredProdDataByCountries, selectedSizes]
  );

  const filtredProdDataByVendors = useMemo(
    () =>
      selectedVendors.length
        ? filtredProdDataBySizes?.filter((el) =>
            selectedVendors.includes(el.vendor)
          )
        : filtredProdDataBySizes,
    [filtredProdDataBySizes, selectedVendors]
  );

  return (
    <div
      className={`${
        filtredProdDataByVendors?.length
          ? "grid gap-y-10 gap-x-2 grid-cols-4 justify-center items-start justify-items-center p-2"
          : "flex items-center justify-center text-orange-500"
      }`}
    >
      {filtredProdDataByVendors?.length
        ? filtredProdDataByVendors?.map((prod) => (
            <ProductItem item={prod} key={prod.sku} />
          ))
        : "Not found"}
    </div>
  );
};

export default ProductList;
