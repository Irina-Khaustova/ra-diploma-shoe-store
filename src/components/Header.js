import Menu from "./Menu";
import MyImage from "../img/banner.jpg";

export default function Header() {
  return (
    <>
      <div className="container">
        <Menu className="menu"></Menu>

        <div className="banner">
          <img className="img-fluid" src={MyImage} alt="К весне готовы!"></img>
          <h2 className="banner-header"> К ВЕСНЕ ГОТОВЫ!</h2>
        </div>
      </div>
    </>
  );
}
