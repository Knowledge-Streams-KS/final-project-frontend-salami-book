import * as yup from 'yup';

const createMatchSchema = yup.object().shape({
    field: yup.number().integer().required("Field is required"),
    bookingDate: yup.string().required("Booking Date is required"),
    bookingTime: yup.string().required("Booking Time is required"),
    team1: yup.number().integer().required("Team 1 is Required"),
    team2: yup.number().integer().required("team2 is required")
})

export default createMatchSchema;