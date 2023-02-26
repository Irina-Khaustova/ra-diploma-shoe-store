import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import catalog from "../../store/slices/catalog";
import { getCategory, getItemsOffset,  } from "../../store/actions/actionToolkit";
import { getItems } from "../../store/slices/catalog";
import Product from "./Product";
import { activeHideButton, highlightActiveCategory } from "../../store/slices/catalog";

export default function Catalog(props) {
  const dispatch = useDispatch();
  const {categories} = useSelector(state => state.catalog);
  const {selectedCategory} = useSelector(state => state.catalog);
  const {items} = useSelector(state => state.catalog);
  let {searchCatalog} = useSelector(state => state.catalog);
  const {hideButton} = useSelector(state => state.catalog);
  const {isLoading} = useSelector(state=> state.catalog);

  const [offset, setOffset] = useState(6);
  const [activeAll, setActiveAll] = useState("catalog-categories-active");
 
  useEffect(() => {
    let url = !searchCatalog ? "items" : `items?&q=${searchCatalog}`;
    dispatch(getCategory("categories"));
    dispatch(getItems({ url: url }));

  }, []);

  const handleClick = (evt) => {
    
    setActiveAll("catalog-categories");
    setOffset(6);
    const selectedCategory = evt.target.id;
    let urlSearchCatalog = !searchCatalog? '': searchCatalog;
    dispatch(activeHideButton());
    dispatch(highlightActiveCategory(selectedCategory))
    dispatch(getItems({
        url: `items?categoryId=${selectedCategory}&q=${urlSearchCatalog}`,
        selectedCategory: selectedCategory,
      },
    ));
  };

  const handleClickAll = (evt) => {
    let url = !searchCatalog ? "items" : `items?&q=${searchCatalog}`;
    setActiveAll("catalog-categories-active");
    dispatch(highlightActiveCategory(''))
    dispatch(activeHideButton());
    dispatch(getItems({ url: url }));
  };

  const handleClickButton = () => {
    let newOffset = offset + 6;
    console.log(newOffset);
    setOffset(newOffset);
    console.log(selectedCategory, searchCatalog);
    const url = !selectedCategory
      ? `items?&offset=${offset}`
      : `items?&categoryId=${selectedCategory}&q=${searchCatalog}&offset=${
          offset + 6
        }`;
    console.log(url);
    dispatch(getItemsOffset({ url: url } ));
  };

  console.log(items);
  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      {props.children}
      <div className="catalog-menu">
        <div className={activeAll} onClick={handleClickAll}>
          Все
        </div>
        {!categories
          ? null
          : categories.map((el) => (
              <div
                className={el.className}
                id={el.categories}
                key={el.categories}
                onClick={handleClick}
              >
                {el.title}
              </div>
            ))}
      </div>
      <div className="catalog-container">
      {!isLoading? <div className="preloader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>: null}
        {items.map((el) => (
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
      {hideButton === false ? (
        <button className="catalog-button" onClick={handleClickButton}>
          Загрузить ещё
        </button>
      ) : null}
    </section>
  );
}
