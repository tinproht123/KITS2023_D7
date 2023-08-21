import { Box, Modal, Typography } from "@mui/material";
import Header from "../../../../components/Header";
import users from "../../../../mock/users";
import { DataGrid } from "@mui/x-data-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Users = () => {
  const [open, setOpen] = useState(false);
  const [imagePath, setImagePath] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "firstName",
      headerName: "First Name",
      flex: 1,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "birthday",
      headerName: "Birthdate",
      minWidth: 200,
    },
    {
      field: "gender",
      headerName: "Gender",
      renderCell: ({ row: { gender } }) => {
        return (
          <Box>
            {gender === "male" ? (
              <FontAwesomeIcon color="#01A6EA" icon="fa-solid fa-mars" />
            ) : (
              <FontAwesomeIcon color="#FFB1CB" icon="fa-solid fa-venus" />
            )}
          </Box>
        );
      },
    },
    {
      field: "country",
      headerName: "Country",
    },
    {
      field: "city",
      headerName: "City",
    },
    {
      field: "image",
      headerName: "Image",
      renderCell: ({ row: { image } }) => {
        return (
          <Box
            sx={{
              width: "50px",
              height: "50px",
            }}
          >
            <img
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "cover" }}
              src={`/images/${image}`}
              alt="image"
              onClick={() => {
                setOpen(true);
                setImagePath(image);
              }}
            />
          </Box>
        );
      },
    },
    {
      field: "role",
      headerName: "Role",
      renderCell: ({ row: { role } }) => {
        return (
          <Box
            width="100%"
            m="0 auto"
            p="5px"
            display="flex"
            alignItems="center"
            backgroundColor={role === "admin" ? "#B22222" : "#228B22"}
            borderRadius="4px"
          >
            {role === "admin" && (
              <FontAwesomeIcon icon="fa-solid fa-shield-halved" color="#fff" />
            )}
            {role === "user" && (
              <FontAwesomeIcon icon="fa-solid fa-user" color="#fff" />
            )}
            <Typography ml={1} color="#fff">
              {role}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m={1}>
      <Header
        title="Users Data"
        subtitle="Manage all FitTracker's users information"
      />
      <Box mt={4} height="75vh" backgroundColor="#fff">
        <DataGrid rows={users} columns={columns} />
      </Box>

      {/* MODAL  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box maxWidth="600px" maxHeight="600px" display="flex">
          <img
            width="100%"
            src={`/images/${imagePath}`}
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default Users;
