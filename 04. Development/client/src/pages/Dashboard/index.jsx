import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [monthly, setMonthly] = useState(dayjs().format("MMM YYYY"));

  const prevWeek = () => {
    const parsedDate = dayjs(monthly, "MMM YYYY");
    const prevMonth = parsedDate.subtract(1, "month");
    setMonthly(prevMonth.format("MMM YYYY"));
  };
  const { isLogin } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const nextWeek = () => {
    const parsedDate = dayjs(monthly, "MMM YYYY");
    const nextMonth = parsedDate.add(1, "month");
    setMonthly(nextMonth.format("MMM YYYY"));
  };

  const calculateDuration = (start, end) => {
    const startDate = dayjs(start); // Replace with your date
    const endDate = dayjs(end);

    const duration = endDate.diff(startDate, "hour");
    return duration;
  };

  const columns = [
    {
      field: "timeStart",
      headerName: "Date",
    },
    {
      field: "activity",
      headerName: "Activity",
      flex: 1,
    },
    {
      field: "distance",
      headerName: "Distance",
      renderField: ({ row: distance }) => {
        return <Typography>{distance} km</Typography>;
      },
      flex: 1,
    },
    {
      field: "duration",
      headerName: "Duration",
      flex: 1,
      valueGetter: (params) => {
        calculateDuration(params.row.timeStart, params.row.timeEnd);
      },
    },
    {
      field: "pace",
      headerName: "Pace",
      flex: 1,
    },
    {
      field: "calories_burned",
      headerName: "Calories Burned",
      flex: 1,
    },
  ];

  useEffect(() => {
    if (!isLogin) {
      navigate("/auth/login");
    }
  }, [isLogin, navigate]);

  return (
    <Box p={10}>
      <Typography fontSize={40} fontWeight={700}>
        Dashboard
      </Typography>
      <Box
        mt={5}
        p={3}
        sx={{
          border: "1px solid #a9a9a9",
        }}
      >
        <Box
          display="flex"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box display={"flex"} alignItems={"center"}>
            <IconButton onClick={prevWeek} color="#000">
              <FontAwesomeIcon icon="fa-solid fa-chevron-left" size="xs" />
            </IconButton>
            <Typography fontWeight={600} fontSize={22} mx={3}>
              {monthly}
            </Typography>
            <IconButton
              onClick={nextWeek}
              disabled={dayjs(monthly).month() === dayjs().month()}
              color="#000"
            >
              <FontAwesomeIcon icon="fa-solid fa-chevron-right" size="xs" />
            </IconButton>
          </Box>
          <Button
            sx={{
              backgroundColor: "#dedede",
              color: "#000",
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "#a9a9a9",
              },
            }}
          >
            <Typography
              fontSize={14}
              fontWeight={500}
              sx={{ "& a": { textDecoration: "none", color: "#000" } }}
            >
              <FontAwesomeIcon
                icon="fa-solid fa-plus"
                style={{ marginRight: "10px" }}
              />{" "}
              <Link to="/add-workout">Add Workout</Link>
            </Typography>
          </Button>
        </Box>
        <Box mt={4} height="75vh">
          <DataGrid rows={[]} columns={columns} sx={{ textAlign: "center" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
