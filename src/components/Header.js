import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Header = ({ activeCategory, setActiveCategory, categories }) => {
  const allSelected = categories.includes(activeCategory);
  return (
    <>
      <div className="w-full top-0 flex justify-between z-10 py-6">
        <Link
          to="/"
          onClick={() => setActiveCategory("")}
          className={`font-bold text-2xl lg:text-3xl text-left uppercase tracking-tight leading-none ${
            allSelected ? "link" : ""
          }`}
        >
          Jeff Hampton
        </Link>
        <div className="flex items-center gap-4 md:gap-6 lg:gap-8 text-sm xl:text-base font-semibold">
          <Link
            to="/"
            onClick={() => setActiveCategory("")}
            className={`link ${allSelected ? "" : "active"} hover:active`}
          >
            All
          </Link>
          {categories?.map((item) => (
            <Link
              to={item}
              key={item}
              className={`link ${activeCategory === item ? "active" : ""}`}
              onClick={() => setActiveCategory(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
