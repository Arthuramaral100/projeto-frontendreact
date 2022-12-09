import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HomePage} from "../Page/HomePage";
import { CartPage } from "../Page/CartPage";
import { ErrorPage } from "../Page/ErrorPage";
import { FinalPage } from "../Page/FinalPage";

export const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/finish" element={<FinalPage/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
};
