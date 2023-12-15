import axios from "axios";
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { slide as Menu } from "react-burger-menu";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";

const baseURL = "https://api.themoviedb.org/3";
const API_KEY = "3d2b9e9f0f762a64bb75d02055de8c4c";
const base_url = "https://image.tmdb.org/t/p/original/";

import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import 'aos/dist/aos.css';


import { Audio } from "react-loader-spinner";
import Aos from "aos";
<Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>;
function formatDate(dateString) {
  if (!dateString) return null;

  const options = { day: "numeric", month: "short", year: "numeric" };
  const formattedDate = new Date(dateString).toLocaleDateString("tr-TR", options);

  return formattedDate;
}


function Homepage() {
  
  useEffect(() => {
    AOS.init();
  }, []);

  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log("🚀 ~ file: homePage.jsx:34 ~ Homepage ~ loading:", loading)
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseURL}/trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovies(response.data.results);
      });
    setLoading(false);
  }, []);

  const listMovie = movies?.slice(5, 20).map((movie) => (
    <div 
    data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"
    className="flex justify-center flex-col items-center m-5">
      <a href={movie.id}>
        <img
          className="w-96 max-md:m-0 hover:scale-125 transition"
          key={movie.id}
          src={`${base_url}${movie.backdrop_path}`}
          alt=""
        />
      </a>
      <div className="bg-gray-900 max-w-[24rem] w-full">
        <div className="flex justify-between items-center">
          <span className="text-white/80 text-xl p-3">
         {movie.original_title ? movie.original_title : movie.name}
        </span>
        <span className="p-3 text-yellow-500">{parseFloat(movie.vote_average).toFixed(1)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="p-3 text-red-500">{formatDate(movie.release_date) || formatDate(movie.first_air_date)}</span>
          <span className="p-3 text-blue-700">{movie.media_type}</span>
        </div>
        

      </div>
      
    </div>
  ));

  console.log(movies);

  let sliderList = null;
  let sliders;
  if (movies != null) {
    sliderList = movies.slice(0, 5);
    sliders = sliderList.map((slider) => (
      <SwiperSlide className="mb-4">
        <div>
          <img
            className="opacity-50 bg-black"
            src={`${base_url}${slider.backdrop_path}`}
          />
          <div className="absolute top-4 text-white/90 flex justify-start w-3/4 md:w-1/2 md:ml-16 flex-col mt-4 space-y-4 min-[375px]:space-y-8 min-[590px]:space-y-12 lg:mt-48">
            <h1 className="text-xl min-[590px]:text-2xl lg:text-5xl lg:mt-16 md:mt-12 hover:scale-110 transition ml-6">
              {slider.original_title ? slider.original_title : slider.name}
            </h1>
            <span className="mx-4  text-xs min-[375px]:text-sm min-[600px]:text-md lg:text-lg px-2">
              {slider.overview}
            </span>
            <a
              className="bg-white text-black rounded-3xl w-20 h-10 flex justify-center items-center ml-6 max-md:w-14 max-md:h-5 max-md:rounded-lg max-md:text-sm hover:scale-125"
              href={slider.id}
            >
              Details
            </a>
          </div>
        </div>
      </SwiperSlide>
    ));
  }


  return ( 
    <div className="bg-black">
    {loading ? (
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    ) : 
    <div className="h-screen w-screen bg-black">
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
    
      <Swiper
        className="h-screen"
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {sliders}
      </Swiper>
      
        <div
          className="bg-black grid grid-cols-3 max-[600px]:grid-cols-1 justify-between mb-8"
        >
          {listMovie}
        </div>
        <div className="text-white/70 h-12 bg-gray-900 flex items-center pl-8"><a href="https://github.com/okocakusak">https://github.com/okocakusak</a></div>
      
    </div>}</div>
  );
}

export default Homepage;
