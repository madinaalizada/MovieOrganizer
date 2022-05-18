import React, { useEffect, useState } from 'react'
import MovieListItem from './MovieListItem'

const MovieList = ({ movies }) => {

    return (
        <div>
            {movies?.length 
            ? movies.map((m) =>
                <MovieListItem movie={m} key={m.imdbID}/>
                )
            : 'There are no content yet...'}
        </div>
    ) 
}

export default MovieList