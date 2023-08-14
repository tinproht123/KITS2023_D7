import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { grey } from "@mui/material/colors";

const StyledButton = styled(Button)({
  color: grey[50],
  background: "#000",
  fontWeight: 700,
  fontSize: "16px",
  padding: "4px 30px 8px",
  borderRadius: "1px",
  "&:hover": {
    backgroundColor: grey[700],
  },
});

export default StyledButton;
