import React from "react";
//router dom
import { useNavigate } from "react-router-dom";
//react query
import { useQuery } from "react-query";
//services
import { fetchMenShoes } from "../../features/products/services";
//redux
import { useAppDispatch } from "../../app/hooks";
import { setIsModalOpen } from "../../features/loadingModal/loadingModalSlice";
import { setMenShoes } from "../../features/products/productsSlice";
//layouts
import { LeftFilterNavBar } from "../../layout";
//component
import {
  ProductList,
  ProductsFilterPanel,
} from "../../features/products/components";
//materialUI
import { Button } from "@material-tailwind/react";
//icons
import {
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

type Props = {};

const Home = (props: Props) => {
  const dispatch = useAppDispatch();
  const { isLoading, data, error, isSuccess, isError } = useQuery(
    "mens-shoes",
    fetchMenShoes
  );
  const navigate = useNavigate();

  if (isLoading) {
    dispatch(setIsModalOpen(true));
  } else {
    dispatch(setIsModalOpen(false));
  }

  if (isError && error instanceof Error) {
    console.log(error);
    return (
      <div>
        {error!.message}
        <Button variant="outlined" className="flex items-center gap-3" onClick={() => navigate(0)}>
          Refresh
          <ArrowPathIcon strokeWidth={2} className="h-5 w-5" />
        </Button>
      </div>
    );
  }

  if (isSuccess) {
    dispatch(setMenShoes(data.data));
  }

  return (
    <div className="container mx-auto px-5 h-[90vh] w-full">
      <div className="flex gap-2 h-[10%] items-center">
        <h1 className="uppercase font-bold text-2xl">Товари для чоловіків</h1>
        <span className="uppercase text-gray-400">2000 товару</span>
      </div>
      <div className="flex h-[90%] w-full">
        <LeftFilterNavBar />
        <div className="w-[90%]  overflow-y-scroll scroll-smooth snap-y snap-mandatory">
          <ProductsFilterPanel />
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Home;
