import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { AlbumI } from "../../utils/interfaces";
import styles from "./ImageList.module.css";

const style = {
  width: "100%",
  maxWidth: "50%",
  bgcolor: "background.paper",
  border: "1px solid #DDDADA",
  padding: 0,
};

interface ImageListPropsI {
  images: AlbumI[];
  filtered: boolean;
}

const ImageList = ({ images, filtered }: ImageListPropsI) => {
  return (
    <div className={styles.imageList}>
      <List sx={style}>
        {filtered
          ? images.map((image, index) => (
              <>
                <ListItem
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#F6EEED" : "#FFFFFF",
                  }}
                  key={`${image.id}${image.title}`}
                >
                  <ListItemText primary={`[${image.id}] ${image.title}`} />
                </ListItem>
                <Divider />
              </>
            ))
          : images.map((image, index) => (
              <>
                <ListItem
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#F6EEED" : "#FFFFFF",
                  }}
                >
                  <ListItemText
                    primary={`photo-album ${image.albumId} [${image.id}] ${image.title}`}
                  />
                </ListItem>
                <Divider />
              </>
            ))}
      </List>
    </div>
  );
};

export default ImageList;
