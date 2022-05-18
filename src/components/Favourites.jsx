import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeMovie } from "../feautures/favListSlice";
import { addFavID } from "../feautures/apiSlice";
import api from "../api";
import { Link } from "react-router-dom";
import "./Favourites.css";
import { setDisable } from "../feautures/saveToggle";

function Favorites() {
  const favs = useSelector((state) => state.favs);
  const dispatch = useDispatch();

  const apiID = useSelector((state) => state);

  const [listName, setListName] = useState("Example List");

  const handleSave = async (e) => {
    await api
      .save({
        title: listName,
        movies: favs,
      })
      .then((d) => {
        dispatch(addFavID(d.id));
        dispatch(setDisable());
      })

    document.getElementById("goList").classList.remove("go-remove");
    document.getElementById("btnSave").classList.remove("favorites__save");
    document.getElementById("btnSave").classList.add("favorites-remove");
  };

  return (
    <div className="favorites">
      <input
        placeholder="New list name: "
        className="favorites__name"
        defaultValue="Example List"
        onChange={(e) => setListName(e.target.value)}
      />
      <ul className="list-group">
        {favs.map((f) => (
          <li key={f.id} className="list-group-item">
            {f.title} {f.year}
            <button
              type="button"
              className="delBtn"
              onClick={() => {
                dispatch(removeMovie({ id: f.id }));
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        id="btnSave"
        className="favorites__save"
        onClick={handleSave}
      >
        Save list
      </button>
      <Link
        id="goList"
        to={`/favorite/${apiID.api}`}
        className="go-link go-remove"
      >
        Go list
      </Link>
    </div>
  );
}

export default Favorites;
