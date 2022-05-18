import React from 'react'; 
import {useDispatch} from 'react-redux';
import {addMovie} from  "../feautures/favListSlice";
import styles from './MovieListItem.module.css';

export default function MovieItem({ movie })  {
    const dispatch = useDispatch();    

    const handleAdd = () =>{
        dispatch(addMovie({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
        }))
    }
    
    return (

        <div className={styles.cardFilm}>
            <img className={styles.poster} src={movie.Poster} alt={movie.imdbID} />
            <div className="movie-item__info">
                <h3 className="movie-item__title">{movie.Title} {`(${movie.Year})`}</h3>
                <button type="button" className="movie-item__add-button" onClick = {handleAdd}>Add to favorite list ⭐</button>
            </div>
        </div>

    )
}

 
