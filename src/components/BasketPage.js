import { useDispatch, useSelector } from "react-redux";
import { deleteProductInBasket } from "../store/slices/basket";


export default function BasketPage() {
    //const dispatch = useDispatch();
    //window.localStorage.clear()
    const {productsInBasket} = useSelector(state => state.basket);
    //const {quantityProductsInBasket} = useSelector(state => state.basket);
   console.log()
   const dispatch = useDispatch();
    

    const  handleDelete = (evt) => {
      console.log(evt.target.id)
     dispatch(deleteProductInBasket(evt.target.id))
    }

    const handleCklickCheckboxAgree = () => {

    }
    
    return (
      <>
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
                <button className="basket-button-delete" id={el.product.id + el.size} onClick={handleDelete}>Удалить</button></div></div>
            )) : null}
      </div>
      <h2>Оформить заказ</h2>
      <div className="making-order">
        <form className="making-order-form">
          <label htmlFor="making-order-form-tel">Телефон</label>
          <input  className="making-order-input" type={"tel"} placeholder={"Ваш телефон"} id="making-order-form-tel"></input>
          <label htmlFor="making-order-form-adress">Адрес доставки</label>
          <input  className="making-order-input" type={"tel"} placeholder={"Адрес доставки"} id="making-order-form-adress"></input>
          <div>
          <span className="checkbox-agree" onClick={handleCklickCheckboxAgree}></span>
          <span className="making-order-input" type={"radio"}>Согласен с правилами доставки</span>
          </div>
        </form>
      </div>
      </>
    );
  }