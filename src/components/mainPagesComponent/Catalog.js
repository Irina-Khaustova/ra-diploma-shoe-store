import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_CATEGORY,
  GET_ITEMS,
  GET_ITEMS_OFFSET,
  HIDE_BUTTON,
} from "../../store/actions/actionTypes";
import Product from "./Product";

export default function Catalog(props) {
  const dispatch = useDispatch();
  const mainState = useSelector((state) => state.mainPageCatalog.categories);
  const selectedCategory = useSelector(
    (state) => state.mainPageCatalog.selectedCategory
  );
  const items = useSelector((state) => state.mainPageCatalog.items);
  let searchCatalog = useSelector(
    (state) => state.mainPageCatalog.searchCatalog
  );
  const hideButton = useSelector((state) => state.mainPageCatalog.hideButton);
  console.log(hideButton);

  //const [isLoad, setIsLoad] = useState('faulse');
  const [offset, setOffset] = useState(6);

  useEffect(() => {
    let url = !searchCatalog ? "items" : `items?&q=${searchCatalog}`;
    dispatch({ type: GET_CATEGORY, payload: "categories" });
    dispatch({ type: GET_ITEMS, payload: { url: url } });
  }, []);

  const handleClick = (evt) => {
    setOffset(6);
    const selectedCategory = evt.target.id;
    //console.log(selectedCategory)
    //dispatch({type: GET_ITEMS, payload: `items?categoryId=${selectedCategory}`})
    dispatch({ type: HIDE_BUTTON });
    //console.log(items)
    dispatch({
      type: GET_ITEMS,
      payload: {
        url: `items?categoryId=${selectedCategory}&q=${searchCatalog}`,
        selectedCategory: selectedCategory,
      },
    });
    //console.log(items)
  };

  const handleClickAll = () => {
    let url = !searchCatalog ? "items" : `items?&q=${searchCatalog}`;
    dispatch({ type: HIDE_BUTTON });
    dispatch({ type: GET_ITEMS, payload: { url: url } });
  };

  const handleClickButton = () => {
    let newOffset = offset + 6;
    console.log(newOffset);
    setOffset(newOffset);
    console.log(offset);
    const url = !selectedCategory
      ? `items?&offset=${offset}`
      : `items?&categoryId=${selectedCategory}&q=${searchCatalog}&offset=${
          offset + 6
        }`;
    console.log(url);
    dispatch({ type: GET_ITEMS_OFFSET, payload: { url: url } });
  };

  console.log(items);
  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      {props.children}
      <div className="catalog-menu">
        <div className="catalog-categories" onClick={handleClickAll}>
          Все
        </div>
        {!mainState
          ? null
          : mainState.map((el) => (
              <div
                className="catalog-categories"
                id={el.id}
                key={el.id}
                onClick={handleClick}
              >
                {el.title}
              </div>
            ))}
      </div>
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
      {hideButton === false ? (
        <button className="catalog-button" onClick={handleClickButton}>
          Загрузить ещё
        </button>
      ) : null}
    </section>
  );
}
