import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./navbar";

const Actionmovies = () => {

    const baseURL = "https://api.themoviedb.org/3"
    const API_KEY = "3d2b9e9f0f762a64bb75d02055de8c4c"
    const base_url = "https://image.tmdb.org/t/p/original/";

    const [movies,setMovies] = useState(null);

    useEffect(() => {
       axios.get(`${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=28`).then((response) => {
         setMovies(response.data.results);
       });
     }, []);
   
      const listMovie = movies?.map((movie) => (
       <div className="flex justify-center flex-col items-center">
           <a href={movie.id}><img className="w-96 m-8 max-md:mx-0 hover:scale-125 transition" key={movie.id} src={`${base_url}${movie.backdrop_path}`} alt="" /></a>
           <span className="text-white text-xl">{movie.original_title ? movie.original_title : movie.name}</span>
       </div>
       
      ))
   
     console.log(movies)



    return (
        <div className="h-screen w-screen bg-black overflow-x-hidden">
            <Navbar/>
            <div className="flex justify-center mt-5 text-5xl"><h1 className="text-white">Action Movies</h1></div>
           <div className="grid grid-cols-3 max-[600px]:grid-cols-1 justify-between mb-8">
             {listMovie}
           </div>
        </div>
    )
}

export default Actionmovies