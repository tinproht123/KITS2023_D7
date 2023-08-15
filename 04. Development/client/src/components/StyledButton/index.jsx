import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { grey } from "@mui/material/colors";

const StyledButton = styled(Button)(({ type }) => ({
  color: `${type === "dark" ? grey[50] : "#000"}`,
  background: `${type === "dark" ? "#000" : "#fff"}`,
  fontWeight: 700,
  fontSize: "16px",
  padding: "4px 30px 8px",
  borderRadius: "2px",
  "&:hover": {
    backgroundColor: `${type === "dark" ? grey[700] : grey[400]}`,
  },
  marginInline: "5px",
}));

export default StyledButton;
