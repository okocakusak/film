import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Homepage from "./homePage";
import Actionmovies from "./Actionmovies";
import TopRated from "./TopRated";
import Comedy from "./Comedy";
import Romance from "./Romance";
import Horror from "./Horror";
import axios from "axios"
import { useState, useEffect } from "react"
import Detail from "./Detail";

const baseURL = "https://api.themoviedb.org/3"
const API_KEY = "3d2b9e9f0f762a64bb75d02055de8c4c"
const base_url = "https://image.tmdb.org/t/p/original/";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
  },
  {
    path: "/action",
    element: <Actionmovies/>,
  },
  {
    path: "/top-rated",
    element: <TopRated/>,
  },
  {
    path: "/comedy",
    element: <Comedy/>,
  },
  {
    path: "/romance",
    element: <Romance/>,
  },
  {
    path: "/horror",
    element: <Horror/>,
  },
  {
    path: "/:id",
    element: <Detail/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)