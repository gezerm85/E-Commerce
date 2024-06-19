import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { id, title, image, price } = product;

  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("./product-detail/" + id)}
      className="product-card"
    >
      <img className="product-img" src={image} alt="" />
      <div className="inner-card">
        <p className="title">{title}</p>
        <h3 className="price">${price}</h3>
      </div>
    </div>
  );
}

export default ProductCard;
