export default function Product({ img, productName, price }) {
  return (
    <div className="product">
        <div className="product-img-container">
      <img className="img-catalog-product" src={img} alt={productName}></img>
      </div>
      <div className="product-specifications-container">
        <div className="product-item product-name">{productName}</div>
        <div className="product-item product-price">{price} pуб.</div>
        <button className="product-item product-button">Заказать</button>
      </div>
    </div>
  );
}
