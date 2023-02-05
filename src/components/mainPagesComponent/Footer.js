import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container bg-light footer">
      <section className="footer-section">
        <h4>Информация</h4>
        <div className="footer-link-container">
        <Link className="footer-link" to="/about.html">О магазине</Link>
        <Link className="footer-link" to="/catalog.html">Каталог</Link>
        <Link className="footer-link" to="/contacts.html">Контакты</Link>
        </div>
      </section>
      <section className="footer-section">
        <h4>Принимаем к оплате</h4>
        <div>
        <div className="footer-pay">
          <div className="footer-pay-systems footer-pay-systems-paypal"></div>
          <div className="footer-pay-systems footer-pay-systems-master-card"></div>
          <div className="footer-pay-systems footer-pay-systems-visa"></div>
          <div className="footer-pay-systems footer-pay-systems-yandex"></div>
          <div className="footer-pay-systems footer-pay-systems-webmoney"></div>
          <div className="footer-pay-systems footer-pay-systems-qiwi"></div>
        </div>
        <div className="footer-copyright">
        2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и аксессуаров.
              Все права защищены.{"\n"} Доставка по всей России!
        </div>
        </div>
      </section>
      <section className=" footer-section footer-contacts">
        <h4>Контакты</h4>
        <a className="footer-contacts-phone" href="tel:+7-495-790-35-03">
          +7 495 79 03 5 03
        </a>
        <span className="footer-contacts-working-hours">
          Ежедневно: с 09-00 до 21-00
        </span>
        <a className="footer-contacts-email" href="mailto:office@bosanoga.ru">
          office@bosanoga.ru
        </a>
        <div className="footer-social-links">
          <div className="footer-social-link footer-social-link-twitter"></div>
          <div className="footer-social-link footer-social-link-vk"></div>
        </div>
      </section>
    </div>
  );
}
