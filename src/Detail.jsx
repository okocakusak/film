import axios from "axios";
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import gsap from "gsap";
import { slide as Menu } from "react-burger-menu";


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

  const containerRef = useRef()
  const detailRef = useRef()
  const starRef = useRef()
  const genreRef = useRef()



  useEffect(() => {
  
    const animationTimeout = setTimeout(() => {
      gsap.from(".image", { x: '-100%', delay: 0.3 });
      gsap.to(containerRef.current, { opacity: 1});
      gsap.from(detailRef.current, { x: '120%', delay:0.3});
      gsap.to(detailRef.current, { opacity: 1});
      gsap.from(starRef.current, { y: '100%', delay: 0.5 });
      gsap.from(genreRef.current, { y: '-100%', delay: 0.5 });
    }, 500);
  
    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);
  

  return (
    <div className="h-screen w-screen bg-black overflow-x-hidden">
      <div className="bg-white/10 font-semibold h-10 flex items-center justify-between py-8 shadow-xl px-24 text-lg absolute w-screen top-0 z-50 max-md:hidden text-white">
        <a className="nav-button" href="/">
          Home
        </a>{" "}
        <span className="w-1/2 flex justify-between">
          <a className="nav-button" href="/top-rated">
            Top Rated
          </a>
          <a className="nav-button" href="/action">
            Action
          </a>
          <a className="nav-button" href="/romance">
            Romance
          </a>
          <a className="nav-button" href="/comedy">
            Comedy
          </a>
          <a className="nav-button" href="/horror">
            Horror
          </a>
        </span>
      </div>
      <div className="bg-white/10 font-semibold text-white h-10 flex items-center justify-between p-4 sticky top-0 z-10 md:hidden">
        <a href="/">Home</a>
        <div className="flex justify-between absolute right-2 top-0">
          <Menu
            className="-mt-1 bg-gray-800/90 text-white justify-center py-32 uppercase font-bold text-2xl flex"
            right
            customCrossIcon={
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Cross_icon_%28white%29.svg/2048px-Cross_icon_%28white%29.svg.png" />
            }
            customBurgerIcon={
              <img
                className="w-4"
                src="https://icon-library.com/images/white-hamburger-menu-icon/white-hamburger-menu-icon-24.jpg"
              />
            }
            zIndex={50}
          >
            <a className="menu-item" href="/top-rated">
              Top Rated
            </a>
            <a className="menu-item" href="/action">
              Action
            </a>
            <a className="menu-item" href="/romance">
              Romance
            </a>
            <a className="menu-item" href="/comedy">
              Comedy
            </a>
            <a className="menu-item" href="/horror">
              Horror
            </a>
          </Menu>
        </div>
      </div>
      <div className="h-1/2">
        {movies && (
          <div className="text-white flex items-center max-md:flex-col">
            <div className="absolute top-0 opacity-50">
              <img src={`${base_url}${movies.backdrop_path}`} alt="" />
            </div>
            
            <img
              ref={containerRef}
              className="h-screen image opacity-0"
              src={`${base_url}${movies.poster_path}`}
              alt=""
            />
            <div ref={detailRef} className="justify-center mx-16 opacity-0">
              <span >
                <ReactStars
                  ref={starRef}
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
              <div ref={genreRef} className="flex">{genreList}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
