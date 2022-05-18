import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeMovie } from "../feautures/favListSlice";
import api from "../api";
import { Link } from "react-router-dom";

function Favorites() {
  const favs = useSelector((state) => state.favs);
  const dispatch = useDispatch();
  const [disable, setDisable] = useState(false);
  const [listName, setListName] = useState('Example List');

  const handleSave = (e) => {
    document.getElementById("saveButton").innerHTML = " Hello World";
    setDisable(true);
    api.save({
        "title": listName,
        "movies": favs
    })
    .then(d => localStorage.setItem("ID", d.id));
    console.log(localStorage.getItem("ID"));
  };



  return (
    <div className="favorites">
      <input
        placeholder="New list name: "
        className="favorites__name"
        defaultValue="Example List"
        onChange={(e)=> setListName(e.target.value)}
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
        id="saveButton"
        type="submit"
        className=""
        disabled={!favs.length}
        onClick={handleSave}
      >
        Save list
      </button>
      <Link to='/favorite/:id' params={{ id: localStorage.getItem("ID") }}>Go To Favourites</Link>
    </div>
  );
}

export default Favorites;
