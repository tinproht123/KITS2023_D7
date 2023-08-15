import { Box, Typography } from "@mui/material";
import StyledButton from "../../components/StyledButton";

const HomePage = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: "1440px", marginInline: "auto" }}>
      <Box position="relative">
        <img src="/images/bg.webp" alt="image-banner" />
        <Box
          sx={{
            position: "absolute",
            bottom: 300,
            right: 50,
            textAlign: "right",
            display: "flex",
            flexDirection: "column",
            alignContent: "flex-end",
          }}
        >
          <Typography
            sx={{ fontSize: "80px", fontWeight: 700, color: "#fff" }}
            mb={4}
            component="h1"
          >
            REACH YOUR BEST
          </Typography>
          <Typography
            component="span"
            color="#fff"
            width={400}
            display="inline-block"
            mb={4}
          >
            Whether you’re training for a marathon or your biggest season yet,
            we’re here to help you make serious progress.
          </Typography>
          <StyledButton type="light">SIGN UP</StyledButton>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
