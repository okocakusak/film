import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";

import "./burger.css";
import Navbar from "./navbar";

const baseURL = "https://api.themoviedb.org/3";
const API_KEY = "3d2b9e9f0f762a64bb75d02055de8c4c";
const base_url = "https://image.tmdb.org/t/p/original/";

const Detail = () => {
  const [movies, setMovies] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTA2ZWRiNWM1ZjI1ZThmYjk4YjFkYTFlYTFhNmJjMyIsInN1YiI6IjY1NzJjZjEzYzRmNTUyMDE0ZDk2ZmFhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bI40qg0xTZoLUkPo95B4Cdv3l4ha1C7fabAh3IjhSQI",
      },
    };

    axios
      .get(
        `
    https://api.themoviedb.org/3/movie/${id}`,
        options
      )
      .then((response) => {
        setMovies(response.data);
        console.log(response.data);
        setGenres(response.data.genres);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  console.log(movies);

  const [genres, setGenres] = useState(null);

  console.log(genres);

  const genreList = genres?.map((genre) => (
    <span className="mr-8 mt-8 text-cyan-800">{genre.name}</span>
  ));

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className="h-screen w-screen bg-black overflow-x-hidden">
      <Navbar/>
      <div className="h-1/2">
        {movies && (
          <div className="text-white flex items-center max-md:flex-col">
            <img
              className="h-screen"
              src={`${base_url}${movies.poster_path}`}
              alt=""
            />
            <div className="justify-center mx-16">
              <span>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
                  value={movies.vote_average / 2}
                />
              </span>
              <h1 className="text-5xl text-red-500 mb-5">
                {movies.original_title ? movies.original_title : movies.name}
              </h1>
              <span>{movies.overview}</span>
              <div className="flex">{genreList}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
