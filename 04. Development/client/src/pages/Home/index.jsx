import { Box, Typography } from "@mui/material";
import StyledButton from "../../components/StyledButton";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomePage = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: "1440px", marginInline: "auto" }}>
      {/* HEADER  */}
      <Box position="relative">
        <img src="/images/bg.webp" alt="image-banner" />
        <Box
          sx={{
            position: "absolute",
            bottom: 200,
            right: 50,
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
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
          <StyledButton sx={{ width: "320px" }} type="light">
            SIGN UP
          </StyledButton>
          <Typography
            variant="p"
            sx={{
              fontSize: 16,
              marginRight: 10,
              color: "#fff",
              "& a": { color: "#fff", fontWeight: 500 },
            }}
            mt={2}
          >
            Already a member? <NavLink>Log In</NavLink>
          </Typography>
        </Box>
      </Box>
      {/* SECTION INTRO  */}
      <Box width="1100px" mx="auto" mt={10}>
        <Box
          sx={{ display: "flex", justifyContent: "space-between" }}
          width="100%"
        >
          <Box
            sx={{
              maxWidth: "400px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                "& > span": {
                  fontSize: "50px",
                  fontWeight: 700,
                  color: "#000",
                  lineHeight: 1,
                },
              }}
            >
              <Typography component="span">SET GOALS.</Typography>
              <Typography component="span">LOG WORKOUTS.</Typography>
              <Typography component="span">STAY ON TRACK.</Typography>
            </Box>
            <Typography component="p" fontSize={16}>
              Easily track your Workouts, set Training Plans, and discover new
              Workout Routines to crush your goals.
            </Typography>
            <StyledButton
              sx={{ width: "320px", margin: "0px !important" }}
              type="dark"
            >
              GET STARTED
            </StyledButton>
          </Box>
          <Box
            sx={{
              textAlign: "right",
              "& img": {
                maxHeight: "400px",
                objectFit: "cover",
              },
            }}
          >
            <img src="/images/img-1.png" alt="image" />
          </Box>
        </Box>
        <Box mt={10}>
          <Box
            sx={{
              backgroundColor: "#000",
              padding: "25px",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: "600px",
                height: "300px",
                "& > img": {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                },
              }}
            >
              <img src="/images/img-2.jpg" alt="challenge-image" />
            </Box>
            <Box p={5}>
              <Typography
                component="h5"
                color="#fff"
                fontWeight={700}
                fontSize={35}
                mb={5}
              >
                YOU VS THE YEAR 2023
              </Typography>
              <Typography component="p" color="#fff" fontSize={16}>
                Run or walk 1,000km in 2023.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "5px",
            height: "5px",
            borderRadius: 9999,
            backgroundColor: "#000",
            marginInline: "auto",
          }}
          my={5}
        ></Box>
        <Box textAlign="center">
          <Typography fontSize={45} color="#000" fontWeight={700} mb={3}>
            PUSH YOUR LIMITS
          </Typography>
          <Typography
            variant="p"
            display="block"
            color="#000"
            fontSize={16}
            mb={3}
          >
            Hit milestones and PR’s by taking on a new challenge every month.
          </Typography>
          <StyledButton sx={{ width: "280px" }} type="dark">
            JOIN A CHALLENGE
          </StyledButton>
        </Box>
        <Box sx={{ display: "flex", height: "700px" }} mt={10}>
          <Box
            sx={{
              width: "100%",
              maxWidth: "400px",
              color: "#000",
            }}
          >
            <Typography
              fontSize={45}
              color="#000"
              fontWeight={700}
              lineHeight={1}
              mb={5}
              mt={2}
            >
              BUILD TO MAKE YOU BETTER
            </Typography>
            <Box
              sx={{
                width: "300px",
                height: "100%",
                "& > h6,p": {
                  marginBottom: "15px",
                },
                "& > h6": {
                  fontWeight: 600,
                },
              }}
            >
              <Typography variant="h6">Smarter Training</Typography>
              <Typography fontSize={16}>
                Turn your phone or smartwatch into your coach—track your
                workouts and get tons of data and tips to help you run better.
              </Typography>
              <Typography variant="h6">Custom Workouts</Typography>
              <Typography fontSize={16}>
                5K? Marathon? No matter where you’re at, get personalized
                Training Plans built just for you and your goals.
              </Typography>
              <Typography variant="h6">Strong Community</Typography>
              <Typography fontSize={16}>
                Create your own custom challenges to push yourself and your
                friends. For extra motivation, reach out and find support from
                the entire UA MapMyRun™ community.
              </Typography>
            </Box>
          </Box>
          <Box>
            <img src="/images/img-3.png" alt="image" />
          </Box>
        </Box>
      </Box>
      {/* SECTION TRAFFIC INFO  */}
      <Box
        sx={{
          backgroundColor: "#000",
          borderRadius: "5px",
          padding: "100px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ textAlign: "center", color: "#fff" }} width="350px">
            <FontAwesomeIcon icon="fa-solid fa-road" />
            <Typography>MILES LOGGED</Typography>
            <Typography>5.2</Typography>
            <Typography>Billion</Typography>
          </Box>
          <Box sx={{ textAlign: "center", color: "#fff" }} width="350px">
            <FontAwesomeIcon icon="fa-solid fa-user-group" />
            <Typography>USERS ACTIVE</Typography>
            <Typography fontSize={65} fontWeight={700}>
              14
            </Typography>
            <Typography>Million</Typography>
          </Box>
          <Box sx={{ textAlign: "center", color: "#fff" }} width="350px">
            <FontAwesomeIcon icon="fa-solid fa-person-running" />
            <Typography>WORKOUTS LOGGED</Typography>
            <Typography>1.2</Typography>
            <Typography>Billion</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
