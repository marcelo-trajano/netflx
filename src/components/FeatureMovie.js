import React, { useState, useEffect } from "react";
import "./FeatureMovie.css";

export default ({ movie }) => {
  return <div className="featureMovie">{movie.original_name}</div>;
};
