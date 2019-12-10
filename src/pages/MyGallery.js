import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import Photos from '../components/Photos'
import '../styles/Gallery.css'

function MyGallery() {
  return (
    <div className="gallery">
      <SimpleReactLightbox>
        <Photos />
      </SimpleReactLightbox>
    </div>
  );
}

export default MyGallery;




