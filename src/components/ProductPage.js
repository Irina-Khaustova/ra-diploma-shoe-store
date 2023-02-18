import Footer from "../components/mainPagesComponent/Footer";
import Header from "../components/mainPagesComponent/Header";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//import { GET_PRODUCT } from "../store/actions/actionTypes";
import { useEffect, useState } from "react";
import { PUT_PRODUCT_IN_BUSKET } from "../store/actions/actionTypes";
//import { getProductInBsket } from "../store/actions/actionToolkit";
import { putProductInBasket } from "../store/slices/basket";
import { getProduct } from "../store/actions/actionToolkit";

export default function ProductPage() {
    
    const navigate = useNavigate();
    const {product} = useSelector(state => state.catalog)
    const dispatch = useDispatch();
    const {id} = useParams();
    console.log(id)
    const url = `items/${id}.html`
    console.log(url) 
    let [chooseSize, setChooseSize] = useState(false);
    let [count, setCount] = useState(0);

    useEffect(()=> {
    dispatch(getProduct(`items/${id}`));
    // eslint-disable-next-line
     },[])

    let sizes = product.sizes;

     const handleClickMinus = () => {
        if(count > 0) {
            console.log(count, typeof(count))
        let newCount = count-=1;
        console.log(newCount)
        setCount(newCount);
        }
     }

     const handleClickPlus = () => {
        if(count < 10) {
            console.log(count, typeof(count))
        let newCount = count+=1;
        console.log(newCount)
        setCount(newCount);
        }
     }

     const handleClickPutInBusket = () => {
        console.log(chooseSize)
       if(chooseSize) {
        dispatch(putProductInBasket({product: product, quantity: count, size: chooseSize}))
         navigate('/cart.html');
       }
    }

    const handleClickChooseSize = (evt) => {
        console.log(evt.target)
        if (chooseSize === false) {
            evt.target.className = "product-size-active"
            console.log('да')
            setChooseSize(evt.target.id);
            console.log(chooseSize)
        } else {
            evt.target.className = "product-size";
            setChooseSize(false)
        }
    }

    console.log(product.images)
  return (
    <div className="product-page">
      <Header />
        <h2>{product.title}</h2>
        <div className="product-page-container">
        <img className="img-catalog-product" src={product.images} alt={product.id}></img>
        <div className="product-specifications-container">
            <div className="product-features">
                <div className="product-feature">Артикул</div>
                <div className="product-feature">{product.sku}</div>
                <div className="product-feature">Производитель</div>
                <div className="product-feature">{product.manufacturer}</div>
                <div className="product-feature">Цвет</div>
                <div className="product-feature">{product.color}</div>
                <div className="product-feature">Материалы</div>
                <div className="product-feature">{product.material}</div>
                <div className="product-feature">Сезон</div>
                <div className="product-feature">{product.season}</div>
                <div className="product-feature">Повод</div>
                <div className="product-feature">{product.reason}</div>
            </div>
            <div className="products-size-container">
                <div className="product-size-title">Размеры в наличии: </div>
            {sizes?.map((el, i) => (el.avalible === true? <div className="product-size" key={i} id={el.size} onClick={handleClickChooseSize}>{el.size}</div>: null))}
                </div>
            <div className="product-quantity">Количество
            <button className="buttonMinus" onClick={handleClickMinus}>-</button>
            <div>{count}</div>
            <button className="buttonPlus" onClick={handleClickPlus}>+</button>
            </div>
            <button className="product-order-button" onClick={handleClickPutInBusket}>В корзину</button>
      </div>
      </div>
      <Footer />
    </div>
  );
}
