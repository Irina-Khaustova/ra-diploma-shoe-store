import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_SALES_HITS_ITEMS } from "../../store/actions/actionTypes";
import Product from "./Product";

export default function SalesHits() {
  const items = useSelector((state) => state.mainPageCatalog.salesHitsItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_SALES_HITS_ITEMS, payload: "top-sales" });
  }, []);

  console.log(items);
  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      <div className="catalog-container">
        {items.map((el) => (
          <Product
            className="catalog-item"
            key={el.id}
            img={el.images[0]}
            productName={el.title}
            price={el.price}
          ></Product>
        ))}
      </div>
    </section>
  );
}
