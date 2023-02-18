import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import catalog from "../../store/slices/catalog";
import { getCategory, getItemsOffset,  } from "../../store/actions/actionToolkit";
import { getItems } from "../../store/slices/catalog";
import Product from "./Product";
import { activeHideButton } from "../../store/slices/catalog";

export default function Catalog(props) {
  const dispatch = useDispatch();
  const {categories} = useSelector(state => state.catalog);
  const {selectedCategory} = useSelector(state => state.catalog);
  const {items} = useSelector(state => state.catalog);
  let {searchCatalog} = useSelector(state => state.catalog);
  const {hideButton} = useSelector(state => state.catalog);
  console.log(hideButton);

  //const [isLoad, setIsLoad] = useState('faulse');
  const [offset, setOffset] = useState(6);

  useEffect(() => {
    let url = !searchCatalog ? "items" : `items?&q=${searchCatalog}`;
    dispatch(getCategory("categories"));
    dispatch(getItems({ url: url }));
    // eslint-disable-next-line
  }, []);

  const handleClick = (evt) => {
    setOffset(6);
    const selectedCategory = evt.target.id;
    let urlSearchCatalog = !searchCatalog? '': searchCatalog;
    console.log(selectedCategory)
    //dispatch({type: GET_ITEMS, payload: `items?categoryId=${selectedCategory}`})
    dispatch(activeHideButton());
    //console.log(items)
    dispatch(getItems({
        url: `items?categoryId=${selectedCategory}&q=${urlSearchCatalog}`,
        selectedCategory: selectedCategory,
      },
    ));
    console.log(items)
  };

  const handleClickAll = () => {
    let url = !searchCatalog ? "items" : `items?&q=${searchCatalog}`;
    dispatch(hideButton);
    dispatch(getItems({ url: url }));
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
    dispatch(getItemsOffset({ url: url } ));
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
        {!categories
          ? null
          : categories.map((el) => (
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
