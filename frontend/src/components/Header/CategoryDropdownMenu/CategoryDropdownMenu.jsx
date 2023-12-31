import { signal } from "@preact/signals-react";
import { useEffect } from "react";
import { allCategoriesActive } from "..";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import "./CategoryDropdownMenu.css";
import { Link } from "react-router-dom";
const activeCategory = signal(null);

const CategoryDropdownMenu = () => {
  const handleMouseEnter = (category) => {
    if (window.innerWidth > 800) activeCategory.value = category;
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 800) activeCategory.value = null;
  };

  const handleClick = (e, category) => {
    e.stopPropagation();
    if (window.innerWidth <= 800) {
      activeCategory.value =
        activeCategory.value === category ? null : category;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".hamburger-menu")) {
        allCategoriesActive.value = false;
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="category-dropdown">
      <div
        className={
          allCategoriesActive.value
            ? "category-dropdown-menu category-dropdown-menu-active"
            : "category-dropdown-menu category-dropdown-menu-disabled"
        }
      >
        <div className="category-item-wrapper">
          <div className="primary-categories">
            <div
              className={
                activeCategory.value === "solarPanels"
                  ? "primary-category primary-category-active"
                  : "primary-category"
              }
              onMouseEnter={() => handleMouseEnter("solarPanels")}
              onMouseLeave={handleMouseLeave}
              onClick={(e) => handleClick(e, "solarPanels")}
            >
              <Link
                to="/solar-panels"
                className={`primary-text ${
                  activeCategory.value === "solarPanels" ? "active" : ""
                }`}
              >
                Solar Panels
              </Link>
              <MdKeyboardArrowRight className="arror-right-icon" />
              <MdKeyboardArrowDown className="arrow-down-icon" />
              <div
                className={
                  activeCategory.value === "solarPanels"
                    ? "sub-category"
                    : "sub-category-hidden"
                }
              >
                <Link
                  state={{
                    subcategory: 1,
                    category: 2,
                    description: "Monocrystalline solar panels",
                  }}
                  to="/solar-panels/mono-crystalline-panels"
                  className="sub-text"
                >
                  Monocrystalline
                </Link>
                <Link
                  state={{
                    subcategory: 2,
                    category: 2,
                    description: "Polycrystalline solar panels",
                  }}
                  to="/solar-panels/poly-crystalline-panels"
                  className="sub-text"
                >
                  Polycrystalline
                </Link>
                <Link
                  state={{
                    subcategory: 3,
                    category: 2,
                    description: "Thin film solar panels",
                  }}
                  to="/solar-panels/thin-film-panels"
                  className="sub-text"
                >
                  Thin Film
                </Link>
              </div>
            </div>
            <div
              className={
                activeCategory.value === "energyStorage"
                  ? "primary-category primary-category-active"
                  : "primary-category"
              }
              onMouseEnter={() => handleMouseEnter("energyStorage")}
              onMouseLeave={handleMouseLeave}
              onClick={(e) => handleClick(e, "energyStorage")}
            >
              <Link
                to="/energy-storage-solutions"
                className={`primary-text ${
                  activeCategory.value === "energyStorage" ? "active" : ""
                }`}
              >
                Energy Storage Solutions
              </Link>
              <MdKeyboardArrowRight className="arror-right-icon" />
              <MdKeyboardArrowDown className="arrow-down-icon" />
              <div
                className={
                  activeCategory.value === "energyStorage"
                    ? "sub-category"
                    : "sub-category-hidden"
                }
              >
                <Link
                  state={{
                    category: 3,
                    subcategory: 1,
                    description: "Storage batteries",
                  }}
                  to="/energy-storage-solutions/storage-batteries"
                  className="sub-text"
                >
                  Batteries
                </Link>
                <Link
                  state={{
                    category: 3,
                    subcategory: 2,
                    description: "Flywheels",
                  }}
                  to="/energy-storage-solutions/flywheels"
                  className="sub-text"
                >
                  Flywheels
                </Link>
                <Link
                  state={{
                    category: 3,
                    subcategory: 3,
                    description: "Thermal energy storage",
                  }}
                  to="/energy-storage-solutions/thermal-energy-storage"
                  className="sub-text"
                >
                  Thermal
                </Link>
              </div>
            </div>
            <div
              className={
                activeCategory.value === "evCharging"
                  ? "primary-category primary-category-active"
                  : "primary-category"
              }
              onMouseEnter={() => handleMouseEnter("evCharging")}
              onMouseLeave={handleMouseLeave}
              onClick={(e) => handleClick(e, "evCharging")}
            >
              <Link
                to="/ev-charges"
                className={`primary-text ${
                  activeCategory.value === "evCharging" ? "active" : ""
                }`}
              >
                EV Charging Stations
              </Link>
              <MdKeyboardArrowRight className="arror-right-icon" />
              <MdKeyboardArrowDown className="arrow-down-icon" />
              <div
                className={
                  activeCategory.value === "evCharging"
                    ? "sub-category"
                    : "sub-category-hidden"
                }
              >
                <Link
                  state={{
                    category: 1,
                    subcategory: 1,
                    description: "Home charging stations",
                  }}
                  to="/ev-charges/home-charging"
                  className="sub-text"
                >
                  Home Charging
                </Link>
                <Link
                  state={{
                    category: 1,
                    subcategory: 2,
                    description: "Public charging stations",
                  }}
                  to="/ev-charges/public-charging"
                  className="sub-text"
                >
                  Public Charging
                </Link>
                <Link
                  state={{
                    category: 1,
                    subcategory: 3,
                    description: "Super charging stations",
                  }}
                  to="/ev-charges/super-charging"
                  className="sub-text"
                >
                  Super Charging
                </Link>
              </div>
            </div>
            <div
              className={
                activeCategory.value === "energyEfficientAppliances"
                  ? "primary-category primary-category-active"
                  : "primary-category"
              }
              onMouseEnter={() => handleMouseEnter("energyEfficientAppliances")}
              onMouseLeave={handleMouseLeave}
              onClick={(e) => handleClick(e, "energyEfficientAppliances")}
            >
              <Link
                to="/energy-efficient-appliances"
                className={`primary-text ${
                  activeCategory.value === "energyEfficientAppliances"
                    ? "active"
                    : ""
                }`}
              >
                Energy-efficient Appliances
              </Link>
              <MdKeyboardArrowRight className="arror-right-icon" />
              <MdKeyboardArrowDown className="arrow-down-icon" />
              <div
                className={
                  activeCategory.value === "energyEfficientAppliances"
                    ? "sub-category"
                    : "sub-category-hidden"
                }
              >
                <Link
                  state={{
                    category: 4,
                    subcategory: 1,
                    description: "Energy saving light bulbs",
                  }}
                  to="/energy-efficient-appliances/energy-saving-light-bulbs"
                  className="sub-text"
                >
                  Energy Saving Light Bulbs
                </Link>
                <Link
                  state={{
                    category: 4,
                    subcategory: 2,
                    description: "Efficient refrigerators",
                  }}
                  to="/energy-efficient-appliances/efficient-refrigerators"
                  className="sub-text"
                >
                  Efficient Refrigerators
                </Link>
                <Link
                  state={{
                    category: 4,
                    subcategory: 3,
                    description: "Efficient washing machines",
                  }}
                  to="/energy-efficient-appliances/efficient-washing-machines"
                  className="sub-text"
                >
                  Efficient Washing Machines
                </Link>
              </div>
            </div>
            <div
              className={
                activeCategory.value === "windTurbines"
                  ? "primary-category primary-category-active"
                  : "primary-category"
              }
              onMouseEnter={() => handleMouseEnter("windTurbines")}
              onMouseLeave={handleMouseLeave}
              onClick={(e) => handleClick(e, "windTurbines")}
            >
              <Link
                to="/wind-turbines"
                className={`primary-text ${
                  activeCategory.value === "windTurbines" ? "active" : ""
                }`}
              >
                Wind Turbines
              </Link>
              <MdKeyboardArrowRight className="arror-right-icon" />
              <MdKeyboardArrowDown className="arrow-down-icon" />
              <div
                className={
                  activeCategory.value === "windTurbines"
                    ? "sub-category"
                    : "sub-category-hidden"
                }
              >
                <Link
                  state={{
                    category: 5,
                    subcategory: 1,
                    description: "Horizontal axis wind turbines",
                  }}
                  to="/wind-turbines/horizontal-axis-turbines"
                  className="sub-text"
                >
                  Horizontal Axis Turbines
                </Link>
                <Link
                  state={{
                    category: 5,
                    subcategory: 2,
                    description: "Vertical axis wind turbines",
                  }}
                  to="/wind-turbines/vertical-axis-turbines"
                  className="sub-text"
                >
                  Vertical Axis Turbines
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDropdownMenu;
