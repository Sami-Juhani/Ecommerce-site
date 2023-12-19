import { signal } from "@preact/signals-react";
import { useEffect } from "react";
import Thumbnail from "../Tumbnails/Thumbnail";
import ThumbnailSale from "../Tumbnails/ThumbnailSale";
import useProducts from "../../hooks/useProducts";
import Filters from "../Filters/Filters";

const subCategoryList = signal([]);

const CategoryPage = ({ category }) => {
  const { productsData, filteredProductsData, getProductsByCategory } =
    useProducts();

  const setSubCategoryList = (subcategory) => {
    const newsubCategoryList = subCategoryList.value.includes(subcategory)
      ? subCategoryList.value.filter((id) => id !== subcategory)
      : [...subCategoryList.value, subcategory];

    return newsubCategoryList;
  };

  const handleFilterChange = (subcategory) => {
    const newsubCategoryList = setSubCategoryList(subcategory);
    subCategoryList.value = newsubCategoryList;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      productsData.value = await getProductsByCategory(category);
    };

    fetchProducts();

    return () => {
      productsData.value = [];
    };
    // eslint-disable-next-line
  }, [category]);

  useEffect(() => {
    if (subCategoryList.value.length > 0) {
      filteredProductsData.value = productsData.value.filter((product) =>
        subCategoryList.value.includes(product.subcategory)
      );

      return () => {
        filteredProductsData.value = [];
      };
    }
    // eslint-disable-next-line
  }, [subCategoryList.value]);

  return (
    <div className="category-page">
      <Filters
        title="Solar Panels"
        category={category}
        handler={handleFilterChange}
      />
      <div className="product-container">
        {subCategoryList.value.length === 0
          ? productsData.value &&
            productsData.value.map((product) => {
              if (product.discount > 0) {
                return <ThumbnailSale {...product} key={product._id} />;
              } else return <Thumbnail {...product} key={product._id} />;
            })
          : filteredProductsData.value &&
            filteredProductsData.value.map((product) => {
              if (product.discount > 0) {
                return <ThumbnailSale {...product} key={product._id} />;
              } else return <Thumbnail {...product} key={product._id} />;
            })}
      </div>
    </div>
  );
};

export default CategoryPage;
