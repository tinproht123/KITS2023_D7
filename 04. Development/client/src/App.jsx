import { CssBaseline, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Navbar from "./components/Navbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPersonRunning,
  faRoad,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

library.add(faPersonRunning, faRoad, faUserGroup);

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        "Saira Condensed",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "sans-serif",
      ].join(","),
      fontSize: 16,
      color: "red",
      fontWeight: 400,
      h6: {
        fontWeight: 800,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Box
          sx={{
            w: "100%",
            maxWidth: "1440px",
            mx: "auto",
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
