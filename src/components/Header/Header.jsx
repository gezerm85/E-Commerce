import "./Header.css";
import { FaBasketShopping } from "react-icons/fa6";
// import { CiLight } from "react-icons/ci";
// import { MdNightlightRound } from "react-icons/md";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useSelector, useDispatch } from "react-redux";
import { setDrawer } from "../../redux/basketSlice";
import logo from "../../assets/images/Logo.jpg";

function Header() {
  // const [theme, setTheme] = useState(true);

  const { products } = useSelector((state) => state.basket);

  const dispatch = useDispatch();

  // const changeTheme = () => {
  //   const body = document.body;

  //   setTheme(!theme);
  //   if (theme) {
  //     body.classList.remove("light-mode");
  //     body.classList.add("dark-mode");
  //   } else {
  //     body.classList.remove("dark-mode");
  //     body.classList.add("light-mode");
  //   }
  // };
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="flex-row">
        <img onClick={() => navigate("/")} className="logo" src={logo} alt="" />
        <p className="logo-text">Çelebi A.Ş</p>
      </div>
      <div className="flex-row">
        <input className="search-input" type="text" placeholder="Ara..." />
        <div className="icon-container">
          {/* {theme ? (
            <MdNightlightRound className="icon" onClick={changeTheme} />
          ) : (
            <CiLight className="icon" onClick={changeTheme} />
          )} */}
          <Badge
            onClick={() => dispatch(setDrawer())}
            badgeContent={products.length}
            color="primary"
          >
            <FaBasketShopping className="icon-basket" color="action" />
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default Header;
