import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import { Lightbox } from "yet-another-react-lightbox";
import { getImages, getCategories } from "./imageList";
import "yet-another-react-lightbox/styles.css";

export default function App() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState(
    window.location.pathname.slice(1)
  );

  const openLightbox = (photoIndex) => {
    setIndex(photoIndex);
    setOpen(true);
  };

  const location = window.location.pathname.slice(1);

  const categories = getCategories();

  const photos = getImages(activeCategory);

  const categoryRoutes = categories.map((category) => (
    <Route
      path={`/${category}`}
      key={category}
      element={<Gallery photos={photos} openLightbox={openLightbox} />}
    />
  ));

  return (
    <BrowserRouter>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={photos}
        index={index}
      />
      <div className="flex-column w-screen overflow-y-scroll mx-auto px-8">
        <Header
          activeCategory={activeCategory}
          location={location}
          setActiveCategory={setActiveCategory}
          categories={categories}
        />
        <Routes>
          <Route
            path="/"
            element={<Gallery photos={photos} openLightbox={openLightbox} />}
          />
          {categoryRoutes}
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
