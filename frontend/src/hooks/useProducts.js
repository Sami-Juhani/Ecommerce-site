import { signal } from "@preact/signals-react";
import { useCallback } from "react";
import { searchError } from "../components/SearchPage";
import { API_URL } from "../index";

const productsData = signal([]);
const categoriesData = signal([]);
const filteredProductsData = signal([]);

const useProducts = () => {
  const getAllCategories = async () => {
    try {
      const response = await fetch(API_URL + "/api/categories"
      );

      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllProducts = async () => {
    try {
      const response = await fetch(API_URL + "/api/products"
      );

      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getProductById = async (productId) => {
    try {
      const response = await fetch(
        `${API_URL}/api/products/${productId}`
      );

      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const searchForProducts = useCallback(async (query) => {
    try {
      const response = await fetch(
        `${API_URL}/api/products/search/${query}`
      );

      if (response.status === 404) {
        const data = await response.json();
        searchError.value = data.message;
      }

      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  // Get product details for each product in the order
  const getProductDetails = async (orders) => {
    try {
      const details = await Promise.all(
        orders.flatMap((order) =>
          order.products.map((product) => getProductById(product.productId))
        )
      );
      return details;
    } catch (error) {
      console.log(error);
    }
  };

  const getSaleProducts = async () => {
    try {
      const response = await fetch(API_URL + "/api/products"
      );
      let filteredProducts = null;

      if (response.ok) {
        const data = await response.json();
        if (data) {
          filteredProducts = data.filter((product) => product.discount > 0);
        }
        return filteredProducts;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getProductsByCategory = async (number) => {
    try {
      const response = await fetch(
        `${API_URL}/api/products/category/${number}`
      );

      if (response.ok) {
        const json = await response.json();
        return json;
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getProductsBySubCategory = async (category, subcategory) => {
    try {
      const response = await fetch(
        `${API_URL}/api/products/category/${category}/${subcategory}`
      );

      if (response.ok) {
        const json = await response.json();
        return json;
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return {
    categoriesData,
    productsData,
    filteredProductsData,
    getAllCategories,
    getAllProducts,
    getProductById,
    searchForProducts,
    getProductDetails,
    getSaleProducts,
    getProductsByCategory,
    getProductsBySubCategory,
  };
};

export default useProducts;
