import * as yup from 'yup';

const addTeamSchema = yup.object().shape({
    teamName: yup.string().required("Team Name is Required"),
    teamDivision: yup.string().required("Team Division is required")
})

export default addTeamSchema;
