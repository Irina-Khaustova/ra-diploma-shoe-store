import Footer from "../components/Footer";
import Header from "../components/Header";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { putProductInBasket, changeProductInBaslet } from "../store/slices/basket";
import { getProduct } from "../store/actions/actionToolkit";

export default function ProductPage() {
    
    const navigate = useNavigate();
    const {product, isLoadingProduct, errorProduct} = useSelector(state => state.catalog)
    const dispatch = useDispatch();
    const {id} = useParams();
    console.log(id)
    const url = `items/${id}.html`
    console.log(url) 
    const {productsInBasket} = useSelector(state => state.basket)
    let [chooseSize, setChooseSize] = useState(false);
    let [count, setCount] = useState(0);

    useEffect(()=> {
      
      dispatch(getProduct(`items/${id}`));
    // eslint-disable-next-line
     },[])

    let sizes = product.sizes;
    console.log(sizes)

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
        console.log(product)
       if(chooseSize) {
        //console.log(productsInBasket[5].product === product, productsInBasket[5].size === chooseSize)
        let filterProduct = productsInBasket?.filter(el => el.product.id === product.id & el.size === chooseSize);
        let index = productsInBasket?.indexOf(filterProduct[0]);
        console.log(33, filterProduct, index)
        if(index >= 0) {
         dispatch(changeProductInBaslet({index:index, quantity: count}))
        } else {
        dispatch(putProductInBasket({product: product, quantity: count, size: chooseSize}))
        }
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
      {!isLoadingProduct? <div className="preloader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>: null}
        {errorProduct? <div className="error">{errorProduct}</div> : null}
        <h2 className="text-cennter">{product.title}</h2>
        <div className="product-page-container">
        <img className="img-catalog-product" src={product.images? product.images[0] : null} alt={product.id}></img>
        {isLoadingProduct? <div className="product-specifications-container">
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
            {sizes?.map((el, i) => (el.available === true? <div className="product-size" key={i} id={el.size} onClick={handleClickChooseSize}>{el.size}</div>: null))}
                </div>
            <div className="product-quantity">Количество
            <button className="button-change-count" onClick={handleClickMinus}>-</button>
            <div className="product-count">{count}</div>
            <button className="button-change-count" onClick={handleClickPlus}>+</button>
            </div>
            <button className="product-order-button" onClick={handleClickPutInBusket}>В корзину</button>
      </div>: null}
      </div>
      <Footer />
    </div>
  );
}
