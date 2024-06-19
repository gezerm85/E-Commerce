import "./Basket.css";
import { useDispatch } from "react-redux";
import { removeBasket } from "../../redux/basketSlice";

function Basket({ product }) {
  const { id, title, image, price, count } = product;

  const dispatch = useDispatch();

  const handleOnclick = (id) => {
    dispatch(removeBasket({ id }));
  };
  return (
    <div className="basket-container">
      <div className="basket-box">
        <img width={50} height={50} src={image} alt="" />
        <h2>
          {title} <span className="count"> ({count}) </span>
        </h2>
      </div>
      <div className="basket-box">
        <h3>{price}$</h3>
        <button onClick={() => handleOnclick(id)}>sil</button>
      </div>
    </div>
  );
}

export default Basket;
