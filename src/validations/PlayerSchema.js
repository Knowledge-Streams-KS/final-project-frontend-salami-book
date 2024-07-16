import * as yup from 'yup';

const addPlayerSchema = yup.object().shape({
    playerName: yup.string().required("Player Name is required"),
    goals: yup.number().integer().required("Goals are required"),
    assists: yup.number().integer().required("Assists are required"),
    motm: yup.number().integer().required("Man of the Match are required"),
    position: yup.string().required("Position is required"),
    teamName: yup.string().required("Team Name is required")
})

export default addPlayerSchema;