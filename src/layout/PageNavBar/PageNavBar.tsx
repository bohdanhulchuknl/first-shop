import React from "react";
//router-dom
import { Link } from "react-router-dom";

type Props = {};

const PageNavBar = (props: Props) => {
  return <div>PageNavBar
    <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
        </ul>
    </nav>
  </div>;
};

export default PageNavBar;
