// import products from "../../models/dataForSale";
import ThumbnailSale from "../Tumbnails/ThumbnailSale";
import { useState, useEffect } from "react";
import { API_URL } from "../..";
import "./Sale.css";

let filteredProducts;

const Sale = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        API_URL + "/api/products"
      );
      const json = await response.json();

      if (response.ok) {
        setData(json);
      }
    };
    fetchProducts();
  }, []);

  if (data) {
    filteredProducts = data.filter((product) => product.discount > 0);
  }

  return (
    <div className="category-page">
      <div className="product-container">
        {data &&
          filteredProducts.map((product) => {
            return <ThumbnailSale {...product} key={product._id} />;
          })}
      </div>
      {/* <div>
            {end < productsFiltered.length ? (
                <button className="all-categories active-btn" onClick={loadHandler}><span>Load more</span></button>
            ) : null}
        </div>       */}
    </div>
  );
};

export default Sale;
