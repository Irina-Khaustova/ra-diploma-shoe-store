import Header from "../components/Header";
import SalesHits from "../components/SalesHits";
import Catalog from "../components/Catalog";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { putInputValue } from "../store/slices/catalog";

export default function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(putInputValue(""));
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Header className="header" />
      <SalesHits className="sales-hits" />
      <Catalog className="catalog" />
      <Footer />
    </>
  );
}
