import React from "react";
//types
import { MenShoes } from "../../productsSlice";

//materialUI
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";

type Props = {
  item: MenShoes;
};

const ProductItem = ({ item }: Props) => {
  const [openPopover, setOpenPopover] = React.useState(false);
  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };
  return (
    <div
      className="flex flex-col justify-center items-center border-2 py-2 transition hover:border-black cursor-pointer"
    >
      <div className="w-[220px] h-[220px] border relative overflow-hidden">
        <span className="absolute top-0 left-0 bg-black text-white px-2 z-10">
          <span>{item.vendor}</span>
        </span>
        <span className="absolute top-0 right-0 z-10 bg-orange-500 text-white px-2  ">
          {item.sizes.length === 1 && item.sizes[0].amount === "1" ? (
            <span className="animate-pulse">Last</span>
          ) : (
            ""
          )}
        </span>
        <img
          className="object-cover h-full w-full absolute top-0 transition hover:scale-105"
          src={item.gallery[0]}
          alt={item.name}
        />
      </div>
      <div>{item.color}</div>
      <div className="text-center p-2">{item.name}</div>
      <div className="w-full px-4 flex justify-end">
        <Popover
          placement="top-end"
          open={openPopover}
          handler={setOpenPopover}
        >
          <PopoverHandler {...triggers}>
            <span className="cursor-pointer ">sizes</span>
          </PopoverHandler>
          <PopoverContent
            {...triggers}
            className=" max-w-[220px] max-h-[300px] bg-black text-white"
          >
            <div>
              {item.sizes.map((el) => (
                <div>
                  {el.size} - {el.amount}шт.
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex w-full pl-4">
        <span>{item.price}₴</span>
      </div>
    </div>
  );
};

export default ProductItem;
