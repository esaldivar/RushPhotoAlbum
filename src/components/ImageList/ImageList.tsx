import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { AlbumI } from "../../utils/interfaces";
import Skeleton from "@mui/material/Skeleton";
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
  loading: boolean;
}

const ImageList = ({ images, filtered, loading }: ImageListPropsI) => {
  return (
    <div className={styles.imageList}>
      {loading ? (
        <List sx={style}>
          <ListItem>
            <Skeleton animation="wave" width={800} height={50} />
          </ListItem>
          <Divider />
          <ListItem>
            <Skeleton animation="wave" width={800} height={50} />
          </ListItem>
          <Divider />
          <ListItem>
            <Skeleton animation="wave" width={800} height={50} />
          </ListItem>
          <Divider />
          <ListItem>
            <Skeleton animation="wave" width={800} height={50} />
          </ListItem>
        </List>
      ) : (
        <List sx={style}>
          {filtered
            ? images.map((image, index) => (
                <div key={`${image.id}${image.title}list-item-container`}>
                  <ListItem
                    sx={{
                      backgroundColor: index % 2 === 0 ? "#F6EEED" : "#FFFFFF",
                    }}
                    key={`${image.id}${image.title}list-item`}
                  >
                    <ListItemText
                      primary={`[${image.id}] ${image.title}`}
                      key={`${image.id}${image.title}list-item-text`}
                    />
                  </ListItem>
                </div>
              ))
            : images.map((image, index) => (
                <div key={`${image.id}${image.title}list-item-container`}>
                  <ListItem
                    sx={{
                      backgroundColor: index % 2 === 0 ? "#F6EEED" : "#FFFFFF",
                    }}
                    key={`${image.id}${image.title}list-item`}
                  >
                    <ListItemText
                      primary={`photo-album ${image.albumId} [${image.id}] ${image.title}`}
                      key={`${image.id}${image.title}list-item-text`}
                    />
                  </ListItem>
                </div>
              ))}
        </List>
      )}
    </div>
  );
};

export default ImageList;
