import React from "react";
//router-dom
import { Link } from "react-router-dom";

type Props = {};

const PageNavBar = (props: Props) => {
  return (
    <div className=" p-5 sticky top-0 bg-black text-white h-[10vh] flex items-center justify-center">
      <div className="container mx-auto flex gap-2 justify-between items-center">
        <div className="flex gap-10">
          <div>LOGO</div>
          <nav>
            <ul className="flex gap-2">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-2">
          <div>Search</div>
          <div>Basket</div>
          <div>User</div>
        </div>
      </div>
    </div>
  );
};

export default PageNavBar;
