import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import MenuItems from "./MenuItems";

const Header = ({ activeCategory, setActiveCategory, categories }) => {
  return (
    <>
      <div className="top-0 flex justify-between z-10 py-6 gap-4">
        <Link
          to="/"
          onClick={() => setActiveCategory("")}
          className={`link font-bold text-xl md:text-2xl lg:text-3xl text-left uppercase tracking-tight leading-none ${
            !activeCategory ? "active" : ""
          }`}
        >
          Jeff Hampton
        </Link>
        <div className="flex items-center gap-4 md:gap-6 lg:gap-8 text-xs md:text-base mr-1 uppercase font-semibold tracking-wider">
          <MenuItems
            categories={categories}
            setActiveCategory={setActiveCategory}
            activeCategory={activeCategory}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
