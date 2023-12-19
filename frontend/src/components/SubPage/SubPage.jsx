import ThumbnailSale from "../Tumbnails/ThumbnailSale";
import Thumbnail from "../Tumbnails/Thumbnail";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useProducts from "../../hooks/useProducts";

const SubcategoryPage = () => {
  const { state } = useLocation();
  const { productsData, getProductsBySubCategory } = useProducts();

  const props = state ? state : {}; 

  useEffect(() => {
    const fetchProducts = async () => {
      productsData.value = await getProductsBySubCategory(
        props.category,
        props.subcategory
      );
    };
    fetchProducts();
    // eslint-disable-next-line
  }, [props.category, props.subcategory]);

  return (
    <div className="category-page">
      <div className="most-popular-title">
        <h1>{props.description}</h1>
      </div>
      <div className="product-container">
        {productsData.value &&
          productsData.value.map((product) => {
            if (product.discount > 0) {
              return <ThumbnailSale {...product} key={product._id} />;
            } else return <Thumbnail {...product} key={product._id} />;
          })}
      </div>
    </div>
  );
};

export default SubcategoryPage;
