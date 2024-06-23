import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Container from "./components/Container/PageContainer";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import RouterConfig from "./config/RouterConfig";
import Drawer from "@mui/material/Drawer";
import Basket from "./components/Basket/Basket";
import { setDrawer, setTotalAmount } from "./redux/basketSlice";
import { useState } from "react";
import Footer from "./components/Footer/Footer";

function App() {
  const { products, drawer, totalAmount } = useSelector(
    (state) => state.basket
  );

  const dispatch = useDispatch();

  useState(() => {
    dispatch(setTotalAmount());
  }, []);

  return (
    <>
      <Container>
        <Header />
        <RouterConfig />
        <Drawer
          anchor="right"
          open={drawer}
          onClose={() => dispatch(setDrawer())}
        >
          {products &&
            products.map((product) => {
              return <Basket key={product.id} product={product} />;
            })}
          <div className="basket-payment">
            <div>
              <h1>Toplam: {totalAmount.toFixed(2)} $</h1>
            </div>
            <div className="flex-row">
              <button className="payment-btn">Ödemeyi Tamamla</button>
            </div>
          </div>
        </Drawer>
        <Loading />
        <Footer />
      </Container>
    </>
  );
}

export default App;
