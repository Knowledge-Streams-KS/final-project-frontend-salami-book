import React, { useEffect, useState } from "react";
import axiosInstance from "../axios/axios";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import createMatchSchema from "../validations/MatchSchema";

const CreateMatch = () => {
  const [fields, setFields] = useState([]);
  const [teams, setTeams] = useState([]);
  const [bookings, setBookings] = useState([])
  const navigate = useNavigate();

  const bookingDate = [];
  const bookingTimes = [
    "12-01 AM",
    "01-02 AM",
    "02-03 AM",
    "06-07 PM",
    "07-08 PM",
    "08-09 PM",
    "09-10 PM",
    "10-11 PM",
    "11-12 PM",
  ];

  for (let day = 1; day <= 30; day++) {
    let dayString = day.toString().padStart(2, "0");
    let date = `${dayString}-01-2024`;
    let dateObject = {};
    dateObject[date] = bookingTimes;
    bookingDate.push(dateObject);
  }

  console.log(bookingDate)

  const getFields = async () => {
    const response = await axiosInstance.get("/fields");
    setFields(response.data.fields);
  };

  const getTeams = async () => {
    const response = await axiosInstance.get("/teams");
    setTeams(response.data.teams);
  };

  const getBookings = async () => {
    const response = await axiosInstance.get("/bookings");
    setBookings(response.data.bookings);
  };

  useEffect(() => {
    getFields();
    getTeams();
    getBookings();
  }, []);

  const onSubmit = async (values, actions) => {
    actions.setSubmitting(true);

    try {
      console.log("Form values:", values);
      const response = await axiosInstance.post("/match", values);

      if (response && response.status === 200) {
        console.log("Form submitted successfully:", values);
        setTimeout(() => {
          actions.resetForm();
          navigate("/matches");
        }, 2000);
      } else if (response && response.status === 400) {
        console.log("Error: User with this email already exists");
        actions.setFieldError("email", "User with this email already exists");
      } else {
        console.log("Error: Something went wrong");
        actions.setStatus({
          success: false,
          message: "Something went wrong, please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      actions.setStatus({
        success: false,
        message: "Error submitting form, please try again later.",
      });
    } finally {
      actions.setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      field: "",
      bookingDate: "",
      bookingTime: "",
      team1: "",
      team2: "",
    },
    validationSchema: createMatchSchema,
    onSubmit,
  });

  const selectedDate = bookingDate.find((date) => date[formik.values.bookingDate]);
  const times = selectedDate ? selectedDate[formik.values.bookingDate] : [];

  return (
    <>
      <div className="flex flex-col items-center space-y-10 py-20">
        <div className="text-7xl">Create Match</div>
        <div className="rounded-md bg-[#232727] px-10 py-5">
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col space-y-5"
          >
            <div className="space-x-3">
              <label className="" htmlFor="field">
                Field:
              </label>
              <select
                className="rounded-md bg-[#0e0f0f] px-4 py-2"
                id="field"
                name="field"
                value={formik.values.field}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="" disabled hidden>
                  Select Field
                </option>
                {fields.map((field) => {
                  return (
                    <option key={field.id} value={field.id}>
                      {field.name}
                    </option>
                  );
                })}
              </select>
              {formik.errors.field && formik.touched.field && (<p className="text-red-600">{formik.errors.field}</p>)}
            </div>

            <div className="space-y-3">
              <div className="space-x-3">
                <label htmlFor="bookingDate">Booking Date:</label>
                <select
                  className="rounded-md bg-[#0e0f0f] px-4 py-2"
                  id="bookingDate"
                  name="bookingDate"
                  value={formik.values.bookingDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="" disabled hidden>
                    Select Date
                  </option>
                  {bookingDate.map((dateObject, index) => {
                    const date = Object.keys(dateObject)[0];
                    return (
                      <option key={index} value={date}>
                        {date}
                      </option>
                    );
                  })}
                  {formik.errors.bookingDate && formik.touched.bookingDate && (<p className="text-red-600">{formik.errors.bookingDate}</p>)}
                </select>
              </div>
              <div className="space-x-3">
                <label htmlFor="bookingTime">Booking Time:</label>
                <select
                  className="rounded-md bg-[#0e0f0f] px-4 py-2"
                  id="bookingTime"
                  name="bookingTime"
                  value={formik.values.bookingTime}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="" disabled hidden>
                    Select Time
                  </option>
                  {times.map((time, index) => {
                    return (
                      <option key={index} value={time}>
                        {time}
                      </option>
                    );
                  })}
                </select>
                {formik.errors.bookingTime && formik.touched.bookingTime && (<p className="text-red-600">{formik.errors.bookingTime}</p>)}
              </div>
            </div>

            <div className="flex space-x-10">
              <div className="space-x-3">
                <label htmlFor="team1">Team 1:</label>
                <select
                  className="rounded-md bg-[#0e0f0f] px-4 py-2"
                  id="team1"
                  name="team1"
                  value={formik.values.team1}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="" disabled hidden>
                    Select Team
                  </option>
                  {teams.map((team) => (
                    <option
                      key={team.id}
                      value={team.id}
                      disabled={team.id === parseInt(formik.values.team2)}
                    >
                      {team.name}
                    </option>
                  ))}
                </select>
                {formik.errors.team1 && formik.touched.team1 && (<p className="text-red-600">{formik.errors.team1}</p>)}
              </div>
              <div className="space-x-3">
                <label htmlFor="team2">Team 2:</label>
                <select
                  className="rounded-md bg-[#0e0f0f] px-4 py-2"
                  id="team2"
                  name="team2"
                  value={formik.values.team2}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="" disabled hidden>
                    Select Team
                  </option>
                  {teams.map((team) => (
                    <option
                      key={team.id}
                      value={team.id}
                      disabled={team.id === parseInt(formik.values.team1)}
                    >
                      {team.name}
                    </option>
                  ))}
                </select>
                {formik.errors.team2 && formik.touched.team2 && (<p className="text-red-600">{formik.errors.team2}</p>)}
              </div>
            </div>

            <div className="flex flex-row justify-end space-x-5">
              <button
                onClick={() => navigate("/matches")}
                className="rounded-md bg-[#ecd706] px-4 py-2 text-black"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-[#ecd706] px-4 py-2 text-black"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateMatch;
