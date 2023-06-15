import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { MovieDetail } from "../components/pages/MovieDetail";

export const Pages = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:id" element={<MovieDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
