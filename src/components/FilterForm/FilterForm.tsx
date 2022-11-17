import { useState } from "react";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import styled from "./FilterForm.module.css";

interface FilterFormPropsI {
  getAlbum: (albumId: number) => void;
  error?: string;
  alert?: boolean;
  closeAlert: (set: boolean) => void;
}

const FilterForm = ({
  getAlbum,
  error,
  alert,
  closeAlert,
}: FilterFormPropsI) => {
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    closeAlert(false);
  };

  return (
    <div className={styled.FilterForm}>
      <TextField
        id="standard-number"
        label="Album ID"
        type="number"
        helperText="Enter the album ID"
        onChange={(e) => {
          getAlbum(parseInt(e.target.value));
        }}
        variant="outlined"
      />
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
