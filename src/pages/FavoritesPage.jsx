import React, { useContext } from 'react';
import { useSelector } from "react-redux";
import { selectFavs } from "../feautures/favListSlice";
import config from "../config.json";


const FavoritesPage = () => {

const favs = useSelector(selectFavs);
  return (
    <div>
      <h3>Your Favourites films</h3>
      <ul>
        {favs.map(m => <li key={m.id}><a href={'https://www.imdb.com/title/' + `${m.id}` + '/'}>{m.id} ---- {m.title} ----- {m.year}</a></li>)}
      </ul>
    </div>
  )
}

export default FavoritesPage