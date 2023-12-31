// ProductPage.jsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useShoppingCart from "../../hooks/useShoppingCart";
import "./ProductPage.css";

const ProductPage = () => {
  const { state } = useLocation();
  const { handleCartBtnClicked, ifInCart } = useShoppingCart();

  const productDetails =
    state && state.productDetails ? state.productDetails : {};

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(isNaN(value) ? 1 : value);
  };

  if (!productDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-page">
      <img
        className="product-image"
        src={`${productDetails.img}`}
        alt={productDetails.productName}
      />
      <div className="product-details">
        <h1 className="product-title">{productDetails.productName}</h1>
        <p className="product-description">{productDetails.description}</p>
        <p className="product-page-price">{productDetails.cost}</p>
        <div className="quantity-section">
          <label htmlFor="quantity">Quantity:</label>
          <input
            className="shopping-cart-item-quantity"
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
          />
        </div>
        <button
          className="add-to-cart-btn"
          onClick={(e) => {
            e.preventDefault();
            handleCartBtnClicked(productDetails, quantity);
          }}
        >
          {ifInCart(productDetails._id) ? "Remove from Cart" : "Add to Cart"}
        </button>

        {/* Product Specifications */}
        <div className="specifications-section">
          <br></br>
          <h2>Product Specifications</h2>
          <br></br>
          <ul>
            <li>Manufacturer: {productDetails.manufacturer}</li>
            <li>Country of origin: {productDetails.country}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
