import { Link } from "react-router-dom";
const MenuItems = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <>
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
    </>
  );
};

export default MenuItems;
