import { useEffect, useState } from "react";
import { FilterFormPropsI } from "../../utils/interfaces";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import styled from "./FilterForm.module.css";

const FilterForm = ({
  albumId,
  setAlbumId,
  getAlbum,
  error,
  alert,
  closeAlert,
  returnWholeAlbum,
  setReturnWholeAlbum,
}: FilterFormPropsI) => {
  const [allHeading, setAllHeading] = useState<string>("Showing All Albums");

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    closeAlert(false);
  };

  useEffect(() => {
    if (error) {
      setAllHeading("");
    } else {
      setAllHeading("Showing All Albums");
    }
  }, [error]);

  return (
    <div className={styled.FilterForm}>
      <TextField
        id="standard-number"
        label="Album ID"
        type="number"
        helperText="Enter the album ID"
        onChange={(e) => {
          setAlbumId(e.target.value);
          getAlbum(parseInt(e.target.value));
        }}
        variant="outlined"
        value={albumId}
        InputLabelProps={{ shrink: true }}
      />
      {parseInt(albumId) > 0 && !error && !returnWholeAlbum ? (
        <>
          <h1>Showing results for Photo Album: {albumId}</h1>
          <Button
            variant="contained"
            onClick={() => {
              setReturnWholeAlbum(true);
              setAlbumId("");
            }}
          >
            Return Whole Album
          </Button>
        </>
      ) : (
        <h1>{allHeading}</h1>
      )}
      {error && (
        <Snackbar
          open={alert}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={handleClose}
            severity="error"
            sx={{ width: "100%" }}
            variant="filled"
          >
            {error}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};

export default FilterForm;
