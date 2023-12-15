import React from "react"
import axios from "axios"
import { BrowserRouter, Link, Route, Router, useNavigate } from "react-router-dom"
import { Root } from "postcss"
import Homepage from "./homePage"
import Actionmovies from "./Actionmovies"
import Aos from "aos"

function App() {
  useNavigate('/action')
  
  useEffect(() => {
    Aos.init();
  }, []);

  return (
      <div>
       
      </div>
  )
}

export default App
