import { Route, BrowserRouter, Routes } from "react-router-dom";

export const Pages = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<></>}></Route>
          <Route path="/:movie" element={<></>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
