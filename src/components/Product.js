import { useNavigate } from "react-router-dom";

export default function Product({ img, productName, price, id }) {


  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/catalog/${id}.html`)
  }

  return (
    <div className="product">
        <div className="product-img-container">
      <img className="img-catalog-product" src={img} alt={productName}></img>
      </div>
      <div className="product-specifications-container">
        <div className="product-item product-name">{productName}</div>
        <div className="product-item product-price">{price} pуб.</div>
        <button className="product-item product-button" onClick={handleClick}>Заказать</button>
      </div>
    </div>
  );
}
