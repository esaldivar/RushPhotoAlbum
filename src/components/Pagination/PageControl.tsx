import { PageControlPropsI } from "../../utils/interfaces";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";

/**
 *
 * @param count pageChange error
 * @returns
 */

const PageControl = ({ count, pageChange, error }: PageControlPropsI) => {
  return (
    <Box justifyContent={"center"} alignItems={"center"} display={"flex"}>
      {error.length === 0 && <Pagination count={count} onChange={pageChange} />}
    </Box>
  );
};

export default PageControl;
