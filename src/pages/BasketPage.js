import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductInBasket,
  changSubmittingFormStatus,
} from "../store/slices/basket";
import { useState, useEffect } from "react";
import { getProduct, submittingForm } from "../store/actions/actionToolkit";
import Header from "../components/Header";

export default function BasketPage() {
  const { productsInBasket, submittingFormStatus } = useSelector(
    (state) => state.basket
  );
  console.log();
  const dispatch = useDispatch();

  const [totalCost, setTotalCost] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    let newTotalCost = productsInBasket.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    setTotalCost(newTotalCost);
  }, [productsInBasket]);

  useEffect(() => {
    if (submittingFormStatus) dispatch(changSubmittingFormStatus);
  }, []);
  const handleDelete = (evt) => {
    dispatch(deleteProductInBasket(evt.target.id));
  };

  const handleChangePhone = (evt) => {
    setPhone(evt.target.value);
  };

  const handleChangeAddress = (evt) => {
    setAddress(evt.target.value);
  };

  const handleChangeCheckboxAgree = (evt) => {
    let isChecked = evt.target.checked ? true : false;
    setIsChecked(isChecked);
  };

  const handleClickMakingOrder = (evt) => {
    console.log(88, productsInBasket[0]);
    if ((phone !== "") & (address !== "") & isChecked) {
      console.log(66);
      const data = {
        owner: {
          phone: `${phone}`,
          address: `${address}`,
        },
        items: productsInBasket.map((el) => ({
          id: el.product.id,
          price: el.product.price,
          count: el.quantity,
        })),
      };
      dispatch(submittingForm({ url: "order", data: data }));
    }
  };

  if (submittingFormStatus)
    return <div className="submitting-form-ok">Заказ оформлен</div>;
  return (
    <>
      <Header />
      <div className="basket-container">
        <h2>Корзина</h2>
        <div className="basket">
          <div className="basket-items-title">
            <div className="basket-item basket-item-number basket-item-title">
              #
            </div>
            <div className="basket-item basket-item-name basket-item-title">
              Название
            </div>
            <div className="basket-item basket-item-size basket-item-title">
              Размер
            </div>
            <div className="basket-item basket-item-quantity basket-item-title">
              Кол-во
            </div>
            <div className="basket-item basket-item-price basket-item-title">
              Стоимость
            </div>
            <div className="basket-item basket-item-total basket-item-title">
              Итого
            </div>
            <div className="basket-item basket-item-actions basket-item-title">
              Дествия
            </div>
          </div>

          {productsInBasket
            ? productsInBasket.map((el, i) => (
                <div
                  className="basket-items-title"
                  key={el.product.id + el.size}
                >
                  <div className="basket-item basket-item-number title">
                    {" "}
                    {i + 1}
                  </div>
                  <div className="basket-item basket-item-name meaning">
                    {el.product.title}
                  </div>
                  <div className="basket-item basket-item-size meaning">
                    {el.size}
                  </div>
                  <div className="basket-item basket-item-quantity meaning">
                    {el.quantity}
                  </div>
                  <div className="basket-item basket-item-price meaning">
                    {el.product.price} руб.
                  </div>
                  <div className="basket-item basket-item-total meaning">
                    {el.product.price * el.quantity} руб.
                  </div>
                  <div className="basket-item basket-item-actions meaning">
                    <button
                      className="basket-button-delete"
                      id={el.product.id + el.size}
                      onClick={handleDelete}
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              ))
            : null}
          <div className="basket-items-title basket-total-container">
            <div className="basket-total basket-total-text">
              Общая стоимость
            </div>
            <div className="basket-total basket-total-cost">
              {totalCost} руб.
            </div>
          </div>
        </div>
        <h2>Оформить заказ</h2>
        <div className="making-order">
          <form className="making-order-form">
            <label htmlFor="making-order-form-tel">Телефон</label>
            <input
              className="making-order-input"
              value={phone}
              onChange={handleChangePhone}
              type={"tel"}
              placeholder={"Ваш телефон"}
              id="making-order-form-tel"
            ></input>
            <label htmlFor="making-order-form-adress">Адрес доставки</label>
            <input
              className="making-order-input"
              value={address}
              onChange={handleChangeAddress}
              placeholder={"Адрес доставки"}
              id="making-order-form-adress"
            ></input>
            <div className="checkbox-agree-container">
              <input
                className="checkbox-agree-marker"
                type="checkbox"
                onChange={handleChangeCheckboxAgree}
              ></input>
              <span className="checkbox-agree-text">
                Согласен с правилами доставки
              </span>
            </div>
            <div
              className="making-order-button"
              onClick={handleClickMakingOrder}
            >
              Оформить
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
