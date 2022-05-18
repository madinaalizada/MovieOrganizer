import React, { useContext } from 'react';
import { useSelector } from "react-redux";
import { selectFavs } from "../feautures/favListSlice";


const FavoritesPage = () => {

  // const favs = useSelector((state) => state.favs);

const favs = useSelector(selectFavs);
  return (
    <div>
      <h3>Your Favourites films</h3>
      <ul>
        {favs.map(m => <li key={m.id}>{m.id} ---- {m.title} ----- {m.year}</li>)}
      </ul>
    </div>
  )
}

export default FavoritesPage