import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import ProductsCatalog from "./pages/ProductsCatalog";
import ProductPage from "./pages/ProductPage";
import BasketPage from "./pages/BasketPage";
import InformasionPage from "./pages/InformationPage";
import ContactsPage from "./pages/ContactsPage";
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
