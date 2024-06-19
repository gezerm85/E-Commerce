import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";

function RouterConfig() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default RouterConfig;
