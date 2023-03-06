import { NavLink, useNavigate} from "react-router-dom";
import MyImage from "../img/header-logo.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { GET_INPUT_CATALOG_VALUE } from "../../store/actions/actionTypes";
import { putInputValue } from "../store/slices/catalog";
import {basket} from "../store/slices/basket";

export default function Menu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {productsInBasket} = useSelector(state => state.basket);
  
  console.log(productsInBasket);

  const [buttonSearchActive, setButtonSearchActive] = useState("invisible");
  const [value, setValue] = useState("");

  const handleChange = (evt) => {
    setValue(evt.target.value);
  };

  const handleClickButtonSearch = () => {
    if (buttonSearchActive === "invisible") {
      setButtonSearchActive("");
    }
    console.log(!buttonSearchActive, value);
    if (buttonSearchActive !== "invisible") {
      if (value) {
        dispatch(putInputValue(value));
        navigate("/catalog.html");
      } else {
        setButtonSearchActive("invisible");
      }
    }
  };

  const handleClickOpenBasket = () => {
    navigate("/cart.html");
  }

  return (
    <div className="navbar navbar-expand-sm navbar-light bg-light">
      <a className="logo" href="/">
        <img className="logo-img" src={MyImage} alt="Bosa Noga" />
      </a>
      <nav className="collapse navbar-collapse">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "menu-item-active" : "menu-item"
          }
        >
          Главная
        </NavLink>
        <NavLink
          to="/catalog.html"
          className={({ isActive }) =>
            isActive ? "menu-item-active" : "menu-item"
          }
        >
          Каталог
        </NavLink>
        <NavLink
          to="/about.html"
          className={({ isActive }) =>
            isActive ? "menu-item-active" : "menu-item"
          }
        >
          О магазине
        </NavLink>
        <NavLink
          to="/contacts.html"
          className={({ isActive }) =>
            isActive ? "menu-item-active" : "menu-item"
          }
        >
          Контакты
        </NavLink>
      </nav>
      <div className="header-controls-pics">
        <div
          className="header-controls-pic header-controls-search"
          onClick={handleClickButtonSearch}
        ></div>
        <div className="header-controls-pic header-controls-cart" onClick={handleClickOpenBasket}>
          {productsInBasket? <div className="quantity-products-basket">{productsInBasket?.length}</div>: null}
        </div>
      </div>
      <form
        data-id="search-form"
        className={
          "header-controls-search-form form-inline " + buttonSearchActive
        }
      >
        <input
          className="form-control"
          placeholder="Поиск"
          value={value}
          onChange={handleChange}
        ></input>
      </form>
    </div>
  );
}
