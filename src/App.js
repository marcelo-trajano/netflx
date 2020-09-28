import React, { useState, useEffect } from "react";
import MovieRow from "./components/MovieRow";
import FeatureMovie from "./components/FeatureMovie";
import "./App.css";
import Api from "./Api";

export default () => {
  const [items, setitems] = useState([]);
  const [featureMovie, setfeatureMovie] = useState(null);

  useEffect(() => {
    const getMovieList = async () => {
      let movieList = await Api.getHomeList();

      setitems(movieList);

      let originals = movieList.filter((i) => i.slug === "originals");
      let randomMovie = Math.floor(
        Math.random() * originals[0].items.results.length
      );
      let movie = await Api.getMovieInfo(
        originals[0].items.results[randomMovie].id,
        "tv"
      );
      console.log(movie.info);
      setfeatureMovie(movie.info);
    };
    getMovieList();
  }, []);

  return (
    <div className="page">
      {featureMovie && <FeatureMovie movie={featureMovie} />}

      <section className="lists">
        {items.map((item, key) => {
          return <MovieRow key={key} data={item} />;
        })}
      </section>
    </div>
  );
};
