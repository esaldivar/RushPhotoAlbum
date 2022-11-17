import { useState } from "react";
import { AlbumI } from "./utils/interfaces";
import axios from "axios";
import FilterForm from "./components/FilterForm/FilterForm";
import styled from "./App.module.css";

const App = () => {
  const [album, setAlbum] = useState<AlbumI[]>([]);
  const [error, setError] = useState<string>("");
  const [alert, setAlert] = useState<boolean>(false);

  const fetchAlbum = (albumId: number) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((res) => {
        if (res.data.length === 0) {
          setAlbum([]);
          setError("No album found. Please try another album id.");
          setAlert(true);
        } else {
          setAlert(false);
          setAlbum(res.data);
          setError("");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className={styled.App}>
      <div>
        <h1>Get Album Details</h1>
      </div>
      <FilterForm
        getAlbum={fetchAlbum}
        error={error}
        alert={alert}
        closeAlert={setAlert}
      />
      {album.map((album) => (
        <div key={album.id}>
          <h1>{album.title}</h1>
          <h1>{album.id}</h1>
        </div>
      ))}
    </div>
  );
};

export default App;
