import Header from "./mainPagesComponent/Header";
import SalesHits from "./mainPagesComponent/SalesHits";
import Catalog from "./mainPagesComponent/Catalog";
import Footer from "./mainPagesComponent/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
//import { GET_INPUT_CATALOG_VALUE } from "../store/actions/actionTypes";
import { putInputValue } from "../store/slices/menuSearch";

export default function MainPage() {
    
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(putInputValue(""));
    // eslint-disable-next-line
  },[]);
  return (
    <>
      <Header className="header" />
      <SalesHits className="sales-hits" />
      <Catalog className="catalog" />
      <Footer />
    </>
  );
}
