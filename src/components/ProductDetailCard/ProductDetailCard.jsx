import { useState } from "react";
import "./ProductDetailCard.css";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addToBasket, setTotalAmount } from "../../redux/basketSlice";

function ProductDetailCard({ item }) {
  const [count, setCount] = useState(1);

  const { id, title, image, price, description } = item;

  const dispatch = useDispatch();

  const addBasket = () => {
    const payload = {
      id,
      title,
      image,
      price,
      description,
      count,
    };
    dispatch(addToBasket(payload));
    dispatch(setTotalAmount());
  };

  return (
    <div className="flex-row">
      <img
        width={300}
        height={400}
        className="detail-images"
        src={image}
        alt=""
      />
      <div className="inner-detail">
        <h1 className="title-text"> {title} </h1>
        <p className="title-desc">{description}</p>
        <h1 className="title-price">{price}</h1>
        <div className="change">
          <FaPlus onClick={() => setCount(count + 1)} />
          <span className="count">{count}</span>
          <FaMinus onClick={() => setCount(count - 1)} />
        </div>
        <div>
          <button onClick={addBasket} className="detail-btn">
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailCard;
