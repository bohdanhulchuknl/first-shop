import React from "react";
//router-dom
import { Routes, Route } from "react-router-dom";
//pages
import { Home, NoMatch } from "./pages";
//layouts
import { PageNavBar } from "./layout";

type Props = {};

const App = (props: Props) => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <PageNavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};

export default App;
