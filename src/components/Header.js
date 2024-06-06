import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import MenuItems from "./MenuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = ({ activeCategory, setActiveCategory, categories }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
        <div className="flex items-center gap-4 md:gap-6 lg:gap-8 text-xs md:text-base font-semibold mr-1 uppercase font-medium tracking-wider">
          {isMobile ? (
            <FontAwesomeIcon icon={faXmark} className="h-5" />
          ) : (
            <MenuItems
              categories={categories}
              setActiveCategory={setActiveCategory}
              activeCategory={activeCategory}
            />
          )}

          {/* 
          {categories?.map((item) => (
            <Link
              to={item}
              key={item}
              className={`link ${activeCategory === item ? "active" : ""}`}
              onClick={() => setActiveCategory(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))} */}
        </div>
      </div>
    </>
  );
};

export default Header;
