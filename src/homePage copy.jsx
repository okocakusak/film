import axios from "axios"
import React from "react"
import { useState, useEffect } from "react"
import { ReactDOM } from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Navbar from "./navbar"

const baseURL = "https://api.themoviedb.org/3"
const API_KEY = "3d2b9e9f0f762a64bb75d02055de8c4c"
const base_url = "https://image.tmdb.org/t/p/original/";



function Homepage() {

    const [movies,setMovies] = useState(null);

 useEffect(() => {
    axios.get(`${baseURL}/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  
   const listMovie = movies?.slice(5,20).map((movie) => (
    <div className="flex justify-center flex-col items-center">
        <a href={movie.id}><img className="w-96 m-8 max-md:m-0 hover:scale-125 transition" key={movie.id} src={`${base_url}${movie.backdrop_path}`} alt="" /></a>
        <span className="text-white text-xl">{movie.original_title ? movie.original_title : movie.name}</span>
    </div>
    
   ))

  console.log(movies)

  let sliderList = null
  let sliders
  if(movies != null){
    sliderList = movies.slice(0,5)
    console.log("🚀 ~ file: homePage.jsx:36 ~ Homepage ~ sliderList:", sliderList)
    sliders = sliderList.map((slider) => (
      
      <a href={slider.id}>
        <div>      
            <img src={`${base_url}${slider.backdrop_path}`} />
            <div className="absolute top-4 text-white/80 flex justify-center w-full flex-col space-y-8 min-[375px]:space-y-12 min-[590px]:space-y-32 lg:space-y-64">
              <h1 className="text-xl min-[590px]:text-2xl lg:text-3xl lg:mt-4">{slider.original_title ? slider.original_title : slider.name}</h1>
              <span className="mx-12 bg-black/50 text-xs min-[375px]:text-sm min-[600px]:text-md lg:text-lg">{slider.overview}</span>
            </div>
          
        </div>    
      </a>
      
    ))
  }
   


   console.log(sliderList)

    return (
        <div className="h-screen w-screen bg-black overflow-x-hidden">
           <Navbar/>
            <div className="flex justify-center mt-5 text-5xl mb-5"><h1 className="text-white">Trending</h1></div>
          
            <Carousel showArrows={true} >
                {sliders}
            </Carousel>

            
           <div className="grid grid-cols-3 max-[600px]:grid-cols-1 justify-between">
             {listMovie}
           </div>
        </div>
    )
}

export default Homepage