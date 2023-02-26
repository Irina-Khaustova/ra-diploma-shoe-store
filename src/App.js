import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage";
import ProductsCatalog from "./components/ProductsCatalog";
import ProductPage from "./components/ProductPage";
import BasketPage from "./components/BasketPage";
import InformasionPage from "./components/InformationPage";
import ContactsPage from "./components/ContactsPage";
//import NoFoundPage from "../src/components/NoFoundPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/catalog.html" element={<ProductsCatalog />} />
        <Route path="/catalog/:id.html" element={<ProductPage />} />
        <Route path="/cart.html" element={<BasketPage />} />
        <Route path="/about.html" element={<InformasionPage/>}/>
        <Route path="/contacts.html" element={<ContactsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
