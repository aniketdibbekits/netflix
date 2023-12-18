import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { json } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieid }) => {
  const trailerVideo=useSelector(store=>store.movies?.trailerVideo);
useMovieTrailer(movieid);
  return (
    <div className="">
      <iframe className="w-screen aspect-video"
       
        src={"https://www.youtube.com/embed/"+trailerVideo?.key + "?&autoplay=1&mute=1"}
       
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
