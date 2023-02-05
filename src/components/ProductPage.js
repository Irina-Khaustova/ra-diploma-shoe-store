import Footer from "../mainPagesComponent/Footer";
import Header from "../mainPagesComponent/Header";

export default function ProductPage({ img, productName }) {
  return (
    <div className="product-page">
      <Header />
      <div className="product">
        <img className="img-catalog-product" src={img} alt={productName}></img>
      </div>
      <Footer />
    </div>
  );
}
