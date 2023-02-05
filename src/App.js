import {Routes, Route} from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage';
import ProductsCatalog from './components/ProductsCatalog';
import Product from "./components/product/ProductPage";
//import NoFoundPage from "../src/components/NoFoundPage";

function App() {
  return (
      <div>
          <Routes>
          <Route path="/" exact element={<MainPage/>} />
          <Route path="/catalog.html" element={<ProductsCatalog/>} />
          <Route path="/product:id" element={<Product/>} />
          
          </Routes>
        </div>
  );
}

export default App;
