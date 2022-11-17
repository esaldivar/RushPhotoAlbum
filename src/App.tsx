import { useEffect, useState } from "react";
import { AlbumI } from "./utils/interfaces";
import axios from "axios";
import FilterForm from "./components/FilterForm/FilterForm";
import ImageList from "./components/ImageList/ImageList";
import styled from "./App.module.css";

const App = () => {
  const [album, setAlbum] = useState<AlbumI[]>([]);
  const [error, setError] = useState<string>("");
  const [alert, setAlert] = useState<boolean>(false);
  const [filtered, setFiltered] = useState<boolean>(false);

  const fetchAllAlbums = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos`)
      .then((res) => {
        if (res.data.length === 0) {
          setAlbum([]);
          setError("Unable to get albums. Please try again later.");
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

  // Fetch specific album by album id
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
          setFiltered(true);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // On initial page load, all albums are fetched.
  useEffect(() => {
    fetchAllAlbums();
  }, []);

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
      {album.length > 0 && <ImageList images={album} filtered={filtered} />}
    </div>
  );
};

export default App;
