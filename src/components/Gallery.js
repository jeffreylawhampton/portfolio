import PhotoAlbum from "react-photo-album";

const Gallery = ({ openLightbox, photos, layout }) => {
  return (
    <PhotoAlbum
      layout={layout}
      spacing={6}
      columns={(containerWidth) => {
        if (containerWidth < 800) return 1;
        if (containerWidth < 1500) return 2;
        if (containerWidth > 2200) return 4;
        return 3;
      }}
      photos={photos}
      onClick={({ index }) => {
        openLightbox(index);
      }}
    />
  );
};

export default Gallery;
