import Header from "./mainPagesComponent/Header";
import SalesHits from "./mainPagesComponent/SalesHits";
import Catalog from "./mainPagesComponent/Catalog";
import Footer from "./mainPagesComponent/Footer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { GET_INPUT_CATALOG_VALUE } from "../store/actions/actionTypes";

export default function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_INPUT_CATALOG_VALUE, payload: "" });
  });
  return (
    <>
      <Header className="header" />
      <SalesHits className="sales-hits" />
      <Catalog className="catalog" />
      <Footer />
    </>
  );
}
