import React, { useState } from "react";
import "./styles.css";
import { songList } from "./songsData";

const displaySongs = (genre) => {
  return (
    <ul className="list-non-bullet-songs">
      {songList[genre].map((song) => {
        return (
          <div key={song} className="flex-container">
            <img className="image" src={song.image} alt="j"></img>
            <div key={song.title} className="song-content">
              <li className="list-item-inline-songs song-title">
                <span>{song.title}</span>
              </li>
              <li className="list-item-inline-songs song-artist">
                <span>{song.artists}</span>
              </li>
              <li className="list-item-inline-songs song-rating">
                <span>
                  {song.rating} <i className="bx bxs-star bx-sm"></i>
                </span>
              </li>
              <li className="list-item-inline-songs song-link">
                <a href={song.link}>
                  <i className="bx bxl-spotify bx-md"></i>
                </a>
              </li>
              <li className="list-item-inline-songs song-embed">
                <iframe
                  src={"https://open.spotify.com/embed/track/" + song.link.slice(31)}
                  frameBorder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
              </li>
            </div>
          </div>
        );
      })}
    </ul>
  );
};

const genres = Object.keys(songList);

export default function App() {
  const [genre, setGenre] = useState("ALL");

  const onClickHandler = (selectedGenre) => {
    setGenre(selectedGenre);
  };

  const musicTabs = () => {
    return (
      <ul className="list-non-bullet-tabs">
        {genres.map((g) => {
          return (
            <li className="list-item-inline-tabs" key={g}>
              <button
                key={g}
                className={`genre-button ${
                  g === genre ? "selectedGenre" : null
                }`}
                onClick={() => onClickHandler(g)}
              >
                {g}
              </button>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="App">
      <div className="heading">
        <h2> ELECTRONIC DANCE MUSIC (EDM) GENRES </h2>
        <h4>
          Top 3 Songs from each genre of EDM music are displayed below. Go ahead
          and play your favourite songs from the spotify links.
        </h4>
      </div>
      <div>{musicTabs()}</div>
      <div>
        {genres.map((g) => {
          return <span key={g}>{genre === g && displaySongs(g)}</span>;
        })}
      </div>
    </div>
  );
}
