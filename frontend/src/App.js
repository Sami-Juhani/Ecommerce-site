import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { signal } from "@preact/signals-react";
import useAuthentication from "./hooks/useAuthentication";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CategoryPage from "./components/CategoryPage";
import ProductPage from "./components/ProductPage";
import Sale from "./components/SalePage";
import SubPage from "./components/SubPage";
import Register from "./components/Register";
import MainPage from "./components/MainPage";
import Checkout from "./components/Checkout";
import Orders from "./components/Orders";
import SearchPage from "./components/SearchPage";
import InputEmail from "./components/ForgotPassword/inputEmail";
import RecoverPassword from "./components/ForgotPassword/RecoverPassword";
import "./App.css";
import "./css/style.css";
import "./css/styleguide.css";

export const currentUser = signal(null);
export const isAuthenticated = signal(false);

function App() {
  const { authenticate } = useAuthentication();

  useEffect(() => {
    isAuthenticated.value = false;
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      authenticate(accessToken);
    }
  }, [authenticate]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/sale" element={<Sale />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/ev-charges" element={<CategoryPage category={1} />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/solar-panels" element={<CategoryPage category={2} />} />
          <Route path="/:productId" element={<ProductPage />} />
          <Route path="/products/search/:query" element={<SearchPage />} />
          <Route path="/energy-storage-solutions" element={<CategoryPage category={3} />} />
          <Route path="/energy-efficient-appliances" element={<CategoryPage category={4} />} />
          <Route path="/wind-turbines" element={<CategoryPage category={5} />} />
          <Route path="/:category/:subcategory" element={<SubPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Register />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/recover-password" element={<InputEmail />} />
          <Route path="/recover-password/:url" element={<RecoverPassword />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
