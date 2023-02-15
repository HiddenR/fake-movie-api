import React, { useEffect, useState } from "react";
import Card from "../../../../ui/Card";
import UseHttps from "../../../../../hooks/useHttps";

const Popular = () => {
  const movieType = "popular";

  const { movieData, isLoading, error } = UseHttps(
    "https://api.themoviedb.org/3/tv/popular?api_key=90564902bbc272fc9b74e023a801f674&language=en-US&page=1"
  );

  if (isLoading) {
    return <h1> Loading...</h1>;
  }
  if (error) {
    console.log(error);
  }
  return (
    <div>
      {movieData !== undefined ? (
        <Card items={movieData} type={movieType} />
      ) : (
        <h1> Loading....</h1>
      )}
      ;
    </div>
  );
};

export default Popular;