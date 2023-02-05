import Header from "./mainPagesComponent/Header";
import Catalog from "./mainPagesComponent/Catalog";
import Footer from "./mainPagesComponent/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  GET_INPUT_CATALOG_VALUE,
  GET_ITEMS,
} from "../store/actions/actionTypes";

export default function ProductsCatalog() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.mainPageCatalog.selectedCategory
  );
  const searchCatalog = useSelector(
    (state) => state.mainPageCatalog.searchCatalog
  );
  const [value, setValue] = useState(searchCatalog);

  const handleInput = (evt) => {
    let url = !selectedCategory
      ? `items?&q=${evt.target.value}`
      : `items?categoryId=${selectedCategory}&q=${evt.target.value}`;
    if (evt.key === "Enter") {
      console.log(url, evt.target.value);
      dispatch({ type: GET_INPUT_CATALOG_VALUE, payload: `${value}` });
      dispatch({ type: GET_ITEMS, payload: { url: url } });
    }
  };

  const handleChange = (evt) => {
    evt.preventDefault();
    setValue(evt.target.value);
  };
  return (
    <>
      <Header className="header" />
      <Catalog className="catalog">
        <input
          className="catalog-search-form"
          value={value}
          onKeyDown={handleInput}
          onChange={handleChange}
        ></input>
      </Catalog>
      <Footer />
    </>
  );
}
