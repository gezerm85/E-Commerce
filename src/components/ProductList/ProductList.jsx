import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/productsSlice";
import "./ProductList.css";
import ProductCard from "../ProductCard/ProductCard";

function ProductList() {
  const dispatch = useDispatch();

  const { product } = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="flex-row" style={{ flexWrap: "wrap", gap: "20px" }}>
      {product &&
        product.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
}

export default ProductList;
