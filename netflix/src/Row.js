import React, { useState, useEffect } from 'react'
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const API_BASE_URL = 'https://api.themoviedb.org/3';

const base_url= "https://image.tmdb.org/t/p/original/"


function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`${API_BASE_URL}/${fetchUrl}`);
            setMovies(request.data.results);
      return request;
    }

        fetchData();

    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },

    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');

        } else {
            movieTrailer(movie?.title || "")
                .then(url => {
                
                // https://www.youtube.com/watch?v=yjRHZEUamCc
                    const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v'));
                })
                .catch(error => console.log(error))
        }
    }

    // console.table(movies);

  return (
    <div className='row'>
          <h2>{title}</h2>

          <div className="row_posters">
              {movies.map(movie => (
                  <img
                      key={movie.id}
                      onClick={() => handleClick(movie)}
                  className={`row_poster ${isLargeRow && "row_posterLarge"}`}    src={`${base_url}${isLargeRow ? movie.poster_path:movie.backdrop_path}`} alt={movie.title} />
              ))}
          </div>

          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row;
