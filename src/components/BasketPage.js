import { useSelector } from "react-redux";


export default function BasketPage() {
    //const dispatch = useDispatch();
    //window.localStorage.clear()
    const {productsInBasket} = useSelector(state => state.basket);
    const {quantityProductsInBasket} = useSelector(state => state.basket);
   console.log(productsInBasket, quantityProductsInBasket)
    // useEffect(() => {
    //   dispatch({ type: GET_INPUT_CATALOG_VALUE, payload: "" });
    // });
    return (
      <div className="basket">
        <h2>Корзина</h2>
        <div className="basket-items-title">
            <div className="basket-item basket-item-number basket-item-title">#</div>
            <div className="basket-item basket-item-name basket-item-title">Название</div>
            <div className="basket-item basket-item-size basket-item-title">Размер</div>
            <div className="basket-item basket-item-quantity basket-item-title">Кол-во</div>
            <div className="basket-item basket-item-price basket-item-title">Стоимость</div>
            <div className="basket-item basket-item-total basket-item-title">Итого</div>
            <div className="basket-item basket-item-actions basket-item-title">Дествия</div>
        </div>
        
        {productsInBasket? productsInBasket.map((el, i) =>(<div className="basket-items-title" key={el.product.id + el.size}>
            <div className="basket-item basket-item-number title"> {i+1}</div>
            <div className="basket-item basket-item-name meaning">{el.product.title}</div>
            <div className="basket-item basket-item-size meaning">{el.size}</div>
            <div className="basket-item basket-item-quantity meaning">{el.quantity}</div>
            <div className="basket-item basket-item-price meaning">{el.product.price}</div>
            <div className="basket-item basket-item-total meaning">{el.product.price*el.quantity}</div>
            <div className="basket-item basket-item-actions meaning">
                <button className="basket-button-delete">Удалить</button></div></div>
            )) : null}
        
        <h2>Оформить заказ</h2>
        <div className=""></div>
      </div>
    );
  }