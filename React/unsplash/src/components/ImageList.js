import React from "react";

export default function ImageList(props) {
  const images = props.images.map(images => {
    return <img src={images.urls.small} alt={images.description} />;
  });
  return <>{images}</>;
}
