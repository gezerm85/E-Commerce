import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SetSelectedProduct } from "../redux/productsSlice";
import { useEffect } from "react";
import ProductDetailCard from "../components/ProductDetailCard/ProductDetailCard";

function ProductDetail() {
  const { id } = useParams();

  const { product, selectedProduct } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    getItemById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getItemById = () => {
    product &&
      product.map((state) => {
        if (state.id == id) {
          dispatch(SetSelectedProduct(state));
        }
      });
  };

  return (
    <div>
      <ProductDetailCard item={selectedProduct} />
    </div>
  );
}

export default ProductDetail;
