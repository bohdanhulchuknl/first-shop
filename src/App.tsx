import React from "react";
//router-dom
import { Routes, Route } from "react-router-dom";
//pages
import { Home, NoMatch } from "./pages";
//layouts
import { PageNavBar } from "./layout";
//component
import LoadingModal from "./features/loadingModal/components/LoadingModal";

type Props = {};

const App = (props: Props) => {

  return (
    <div className="w-full">
      <LoadingModal />
      <PageNavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};

export default App;
