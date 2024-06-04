import PhotoAlbum from "react-photo-album";

const Gallery = ({ openLightbox, photos }) => {
  return (
    <PhotoAlbum
      layout="columns"
      spacing={12}
      columns={(containerWidth) => {
        if (containerWidth < 600) return 1;
        if (containerWidth < 1000) return 2;
        if (containerWidth < 1600) return 3;
        return 4;
      }}
      photos={photos}
      onClick={({ index }) => {
        openLightbox(index);
      }}
    />
  );
};

export default Gallery;
