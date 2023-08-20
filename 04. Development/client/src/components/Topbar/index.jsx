import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, IconButton, InputBase } from "@mui/material";

const Topbar = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      backgroundColor="#fff"
      border="1px solid red"
    >
      <Box display="flex" borderRadius="3px" backgroundColor="#f9f9f9">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" p={1}>
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="2xs" />
        </IconButton>
      </Box>

      <Box display="flex">
        <IconButton>
          <FontAwesomeIcon icon="fa-solid fa-gear" size="2xs" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
