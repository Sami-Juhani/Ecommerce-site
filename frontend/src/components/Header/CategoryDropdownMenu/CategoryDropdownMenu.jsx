import { useState } from "react";
import { Link } from "react-router-dom";
import { allCategoriesActive } from "..";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import useProducts from "../../../hooks/useProducts";

import "./CategoryDropdownMenu.css";

const CategoryDropdownMenu = ({ className }) => {
  const { categoriesData } = useProducts();
  const [activeCategory, setActiveCategory] = useState(null);
  allCategoriesActive.value = true;

  return (
    <div className={className}>
      <div
        className={
          allCategoriesActive.value
            ? "category-dropdown-menu category-dropdown-menu-active"
            : "category-dropdown-menu category-dropdown-menu-disabled"
        }
      >
        <div className="category-item-wrapper">
          <div className="primary-categories">
            {categoriesData.value &&
              categoriesData.value.map((category, index) => (
                <div
                  key={index}
                  className={
                    activeCategory === category.category
                      ? "primary-category primary-category-active"
                      : "primary-category"
                  }
                  onMouseEnter={() => {
                    if (window.innerWidth > 800)
                      setActiveCategory(category.category);
                  }}
                  onMouseLeave={() => {
                    if (window.innerWidth > 800) setActiveCategory(null);
                  }}
                >
                  <Link
                    to={`/${category.category}`}
                    className="primary-text"
                    onMouseEnter={() => {
                      if (window.innerWidth < 801)
                        setActiveCategory(
                          activeCategory === category.category
                            ? null
                            : category.category
                        );
                    }}
                  >
                    {category.category}
                  </Link>
                  <MdKeyboardArrowRight className="arror-right-icon" />
                  <MdKeyboardArrowDown className="arrow-down-icon" />
                  <div
                    className={
                      activeCategory === category.category
                        ? "sub-category"
                        : "sub-category-hidden"
                    }
                  >
                    {category.subcategories.map((subcategory, subIndex) => (
                      <Link
                        key={subIndex}
                        to={`/${category.category}/${subcategory}`}
                        className="sub-text"
                      >
                        {subcategory}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDropdownMenu;
