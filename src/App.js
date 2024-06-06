import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import { Lightbox } from "yet-another-react-lightbox";
import { getImages, getCategories, getFeatured } from "./imageList";
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

  // const photos = getImages(activeCategory);

  const pics = activeCategory ? getImages(activeCategory) : getFeatured();

  const categoryRoutes = categories.map((category) => (
    <Route
      path={`/${category}`}
      key={category}
      element={
        <Gallery
          photos={pics}
          // photos={activeCategory ? getImages(activeCategory) : getFeatured()}
          openLightbox={openLightbox}
          layout={"masonry"}
        />
      }
    />
  ));

  return (
    <BrowserRouter>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={pics}
        index={index}
      />
      <div className="flex-column justify-center items-center mb-6 w-screen px-6 overflow-y-hidden">
        <Header
          activeCategory={activeCategory}
          location={location}
          setActiveCategory={setActiveCategory}
          categories={categories}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Gallery
                // photos={featured}
                photos={pics}
                openLightbox={openLightbox}
                layout="masonry"
              />
            }
          />
          {categoryRoutes}
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
