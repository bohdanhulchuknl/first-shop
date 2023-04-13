import React, { useEffect, useMemo, useState } from "react";
//redux
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectMenShoes } from "../../features/products/productsSlice";
import {
  setMinMaxValues,
  setValues,
  toggleSelectedCategories,
  toggleSelectedCountries,
  toggleSelectedSize,
  toggleSelectedVendor,
} from "../../features/leftFilterNavBar/leftFilterNavBarSlice";
//components
import { FilterCategoryList } from "../../features/leftFilterNavBar/components";
// import { DoubleRangeSlider } from "../../components";

type Props = {};

interface IFilterValue {
  category: string[];
  country: string[];
  minPrice: number;
  maxPrice: number;
  sizes: string[];
  vendor: string[];
}

const LeftFilterNavBar = (props: Props) => {
  const dispatch = useAppDispatch();
  const menShoes = useAppSelector(selectMenShoes);
  const {
    selectedCategories,
    selectedCountries,
    selectedSizes,
    selectedVendors,
  } = useAppSelector((state) => state.leftFilterNavBar);

  const menShoesFilterValues = useMemo(() => {
    const filterValues: IFilterValue = {
      category: [],
      country: [],
      maxPrice: 0,
      minPrice: 0,
      sizes: [],
      vendor: [],
    };
    menShoes?.map((el, elIndex) => {
      if (!filterValues.category.includes(el.category)) {
        filterValues.category.push(el.category);
      }
      if (!filterValues.country.includes(el.country)) {
        filterValues.country.push(el.country);
      }
      if (filterValues.minPrice > el.price || elIndex === 0) {
        filterValues.minPrice = el.price;
      }
      if (filterValues.maxPrice < el.price || elIndex === 0) {
        filterValues.maxPrice = el.price;
      }
      el.sizes.map((sizeEl) => {
        if (!Number(sizeEl.size)) {
          return sizeEl;
        }
        if (!filterValues.sizes.includes(sizeEl.size)) {
          filterValues.sizes.push(sizeEl.size);
        }
        return sizeEl;
      });
      if (!filterValues.vendor.includes(el.vendor)) {
        filterValues.vendor.push(el.vendor);
      }
      return el;
    });
    return filterValues;
  }, [menShoes]);

  const handlerToggleSelectedCategory = (value: string) => {
    dispatch(toggleSelectedCategories({ value }));
  };

  const handlerToggleSelectedCountry = (value: string) => {
    dispatch(toggleSelectedCountries({ value }));
  };

  const handlerToggleSelectedSize = (value: string) => {
    dispatch(toggleSelectedSize({ value }));
  };

  const handlerToggleSelectedVendor = (value: string) => {
    dispatch(toggleSelectedVendor({ value }));
  };

  useEffect(() => {
    dispatch(
      setMinMaxValues({
        minValue: menShoesFilterValues.minPrice,
        maxValue: menShoesFilterValues.maxPrice,
      })
    );
    dispatch(
      setValues({
        min: menShoesFilterValues.minPrice,
        max: menShoesFilterValues.maxPrice,
      })
    );
  }, [menShoesFilterValues.maxPrice, menShoesFilterValues.minPrice]);

  return (
    <div className="w-[20%] overflow-y-scroll scroll-smooth">
      <h3 className="text-xl pb-2 font-semibold">Фільтри</h3>

      <FilterCategoryList
        categoryTitle="Категорії"
        categoryItems={menShoesFilterValues.category}
        toggleItemHandler={handlerToggleSelectedCategory}
        selectedItems={selectedCategories}
      />
      <FilterCategoryList
        categoryTitle="Країна"
        categoryItems={menShoesFilterValues.country}
        toggleItemHandler={handlerToggleSelectedCountry}
        selectedItems={selectedCountries}
      />
      {/* <DoubleRangeSlider /> */}
      <FilterCategoryList
        categoryTitle="Розміри"
        categoryItems={menShoesFilterValues.sizes}
        toggleItemHandler={handlerToggleSelectedSize}
        selectedItems={selectedSizes}
      />
      <FilterCategoryList
        categoryTitle="Бренди"
        categoryItems={menShoesFilterValues.vendor}
        toggleItemHandler={handlerToggleSelectedVendor}
        selectedItems={selectedVendors}
      />
    </div>
  );
};

export default LeftFilterNavBar;
