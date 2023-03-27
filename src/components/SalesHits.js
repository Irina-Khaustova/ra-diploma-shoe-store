import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { getSalesHitsItems } from "../store/actions/actionToolkit";

export default function SalesHits() {
  const { salesHitsItems, isLoading } = useSelector((state) => state.salesHits);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSalesHitsItems("top-sales"));
    // eslint-disable-next-line
  }, []);

  return (
    <section className="catalog">
      <h2 className="text-center">Хиты продаж!</h2>
      {!isLoading ? (
        <div className="preloader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      ) : null}
      <div className="catalog-container">
        {salesHitsItems?.map((el) => (
          <Product
            className="catalog-item"
            key={el.id}
            img={el.images[0]}
            productName={el.title}
            price={el.price}
            id={el.id}
          ></Product>
        ))}
      </div>
    </section>
  );
}
