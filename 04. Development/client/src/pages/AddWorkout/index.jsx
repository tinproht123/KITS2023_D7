import { Box, TextField } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const AddWorkout = () => {
  const validationSchema = yup.object({
    name: yup.string("Enter name of workout"),
    hourStart: yup.string().required("Time is required"),
    hourEnd: yup.string().required("Time is required"),
    dateStart: yup.date().required("Date is required"),
    dateEnd: yup.string().required("Date is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      hourState: "",
      hourEnd: "",
      dateStart: dayjs(),
      dateEnd: dayjs(),
    },
    validationSchema,
    onSubmit: (val) => {
      console.log(val);
    },
  });

  return (
    <Box
      sx={{
        maxWidth: "700px",
        width: "95%",
        marginInline: "auto",
        border: "1px solid #a9a9a9",
      }}
      mt={5}
      mb={20}
      p={4}
    >
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          label="Workout name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          sx={{ marginBottom: "20px" }}
        />
        <Box display="flex">
          <TimePicker
            views={["hours", "minutes", "seconds"]}
            sx={{ flex: 1, mr: 1 }}
            label="Time start"
            value={formik.values.hourStart}
            onChange={(time) => {
              formik.setFieldValue("hourStart", time);
            }}
            slotProps={{
              textField: {
                variant: "outlined",
                error:
                  formik.touched.hourStart && Boolean(formik.errors.hourStart),
                helperText: formik.touched.hourStart && formik.errors.hourStart,
              },
            }}
          />
          <DatePicker
            disablePast
            label="Date start"
            format="YYYY/MM/DD"
            value={formik.values.dateStart}
            onChange={(date) => {
              formik.setFieldValue("dateStart", date);
            }}
            sx={{ flex: 1, ml: 1 }}
            slotProps={{
              textField: {
                variant: "outlined",
                error:
                  formik.touched.dateStart && Boolean(formik.errors.dateStart),
                helperText: formik.touched.dateStart && formik.errors.dateStart,
              },
            }}
          />
        </Box>
      </form>
    </Box>
  );
};

export default AddWorkout;
