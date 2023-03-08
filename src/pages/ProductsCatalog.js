import Header from "../components/Header";
import Catalog from "../components/Catalog";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { putInputValue } from "../store/slices/catalog";
import { getItems } from "../store/slices/catalog";

export default function ProductsCatalog() {
  const dispatch = useDispatch();
  const { selectedCategory, searchCatalog } = useSelector(
    (state) => state.catalog
  );

  const [value, setValue] = useState(`${searchCatalog}`);

  const handleInput = (evt) => {
    let url = !selectedCategory
      ? `items?&q=${evt.target.value}`
      : `items?categoryId=${selectedCategory}&q=${evt.target.value}`;
    if (evt.key === "Enter") {
      dispatch(putInputValue(value));
      dispatch(getItems({ url: url }));
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
          placeholder="Поиск"
          value={value}
          onKeyDown={handleInput}
          onChange={handleChange}
        ></input>
      </Catalog>
      <Footer />
    </>
  );
}
