import React, { useState, useEffect } from "react";
import "./FeatureMovie.css";

export default ({ movie }) => {
  return (
    <section
      className="featureMovie"
      style={{
        backgroudSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div>{movie.original_name}</div>
    </section>
  );
};
