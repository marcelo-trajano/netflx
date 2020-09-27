import React, { useState, useEffect } from "react";
import MovieRow from "./components/MovieRow";
import "./App.css";
import Api from "./Api";

export default () => {
  const [items, setitems] = useState([]);

  useEffect(() => {
    const getMovieList = async () => {
      let movieList = await Api.getHomeList();
      console.log(movieList);

      setitems(movieList);
    };
    getMovieList();
  }, []);

  return (
    <div className="page">
      <section className="lists">
        {items.map((item, key) => {
          return <MovieRow key={key} data={item} />;
        })}
      </section>
    </div>
  );
};
