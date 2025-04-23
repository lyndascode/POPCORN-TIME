import movies from "../Data/movies.json"
import React, { useState } from "react";


function MovieList() {

    console.log("grbgb")

    const [moviesToDisplay, setMoviesToDisplay] = useState(movies); //here movies is the initial array where the list will be put 
    const deleteMovie = (movieToDeleteId) => {
        console.log(`deleting movie with id:   ${movieToDeleteId}`)

        const newList = moviesToDisplay.filter((movie) => {
            if (movie.id !== movieToDeleteId) {
                return true;  //keep it 
            }
            else {
                return false; //delete it 
            }
        })

        setMoviesToDisplay(newList);
    }

    return (<>
        <h1>This is the MovieList ! </h1>
        {moviesToDisplay.map((movieObj) => {
            return (
                <div key={movieObj.id} className="card">
                    <p > {movieObj.title} </p>
                    <p  > {movieObj.year} </p>
                    <img src={movieObj.imgURL} />

                    <p>
                        <button onClick={() => deleteMovie(movieObj.id)}>Delete this movie</button>
                    </p>
                </div>
            )
        })}
    </>
    )
}

export default MovieList; 