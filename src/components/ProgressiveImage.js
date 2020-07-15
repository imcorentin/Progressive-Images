import React, { useState, useEffect } from "react";

export const ProgressiveImage = ({ title, thumbnail, source }) => {
  const runOnce = true;
  const [params, setParams] = useState({
    title,
    thumbnail,
    source,
    loaded: false,
  });

  useEffect(() => {
    const img = new Image();

    img.onload = function () {
      setParams({
        title,
        thumbnail,
        source: img.src,
        loaded: true,
      });
    };

    img.src = source;
  }, [runOnce, source, thumbnail, title]);

  return (
    <div className="image-container">
      <div className={`small_size ${params.loaded ? "is-loaded" : "is-loading"}`}>
        <img
          src={params.thumbnail}
          alt={`${params.title} small size`}
          draggable="false"
        />
      </div>
      {params.loaded && (
        <img src={params.source} alt={params.title} draggable="false" />
      )}
    </div>
  );
};
