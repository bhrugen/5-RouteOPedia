import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import ProductList from "../pages/product/ProductList";
function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
