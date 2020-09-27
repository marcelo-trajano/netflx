import React from "react";
import "../components/MovieRow.css";
const IMG_PATH = "https://image.tmdb.org/t/p/w300";

export default ({ data }) => {
  return (
    <div className="movieRow">
      <h2>{data.title}</h2>
      <div className="movieRow-listarea">
        <div className="movieRow-list">
          {data.items.results.length > 0 &&
            data.items.results.map((item, key) => {
              return (
                <div key={key} className="movieRow-item">
                  <img src={`${IMG_PATH}${item.poster_path}`} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
