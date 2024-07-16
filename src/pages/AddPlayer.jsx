import React, { useState, useEffect } from "react";
import axiosInstance from "../axios/axios";
import { useFormik } from "formik";
import addPlayerSchema from "../validations/PlayerSchema";
import { useNavigate } from "react-router";

const AddPlayer = () => {
  const [teams, setTeams] = useState([]);

  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    actions.setSubmitting(true); 
  
    try {
      console.log("Form values:", values);
      const response = await axiosInstance.post('/player', values);
  
      if (response && response.status === 200) {
        console.log("Form submitted successfully:", values);
        setTimeout(() => {
          actions.resetForm();
          navigate('/players');
        }, 2000); 
      } else if (response && response.status === 400) {
        console.log("Error: User with this email already exists");
        actions.setFieldError('email', 'User with this email already exists'); 
      } else {
        console.log("Error: Something went wrong");
        actions.setStatus({ success: false, message: "Something went wrong, please try again." });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      actions.setStatus({ success: false, message: "Error submitting form, please try again later." });
    } finally {
      actions.setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
        playerName: '',
        goals: '',
        assists: '',
        motm: '',
        position: '',
        teamName: ''
    },
    validationSchema: addPlayerSchema,
    onSubmit
  })

  const getTeams = async () => {
    const response = await axiosInstance.get("/teams");
    setTeams(response.data.teams);
  };

  useEffect(() => {
    getTeams();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center space-y-10 py-20">
        <div className="text-7xl">Add Player</div>
        <div className="rounded-md bg-[#232727] px-10 py-5">
          <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-5">
            <div className="flex justify-between">
              <div className="space-x-3">
                <label htmlFor="playerName">Player Name:</label>
                <input
                value={formik.values.playerName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                  placeholder="Player Name"
                  className="rounded-md bg-[#0e0f0f] px-4 py-2"
                  id="playerName"
                  name="playerName"
                  type="text"
                />
                 {formik.errors.playerName && formik.touched.playerName && (<p className="text-red-600">{formik.errors.playerName}</p>)}
              </div>
              <div className="space-x-3">
                <label htmlFor="playerImage">Player Image:</label>
                <input
                  className="rounded-md bg-[#0e0f0f] px-4 py-2"
                  id="playerImage"
                  name="playerImage"
                  type="file"
                />
              </div>
            </div>
            <div className="flex space-x-8">
              <div className="space-x-3">
                <label htmlFor="goals">Goals:</label>
                <input
                value={formik.values.goals}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                  placeholder="Goals"
                  className="rounded-md bg-[#0e0f0f] px-4 py-2"
                  id="goals"
                  name="goals"
                  type="text"
                />
                 {formik.errors.goals && formik.touched.goals && (<p className="text-red-600">{formik.errors.goals}</p>)}
              </div>
              <div className="space-x-3">
                <label htmlFor="assists">Assists:</label>
                <input
                value={formik.values.assists}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                  placeholder="Assists"
                  className="rounded-md bg-[#0e0f0f] px-4 py-2"
                  id="assists"
                  name="assists"
                  type="text"
                />
                 {formik.errors.assists && formik.touched.assists && (<p className="text-red-600">{formik.errors.assists}</p>)}
              </div>
              <div className="space-x-3">
                <label htmlFor="motm">MOTM:</label>
                <input
                value={formik.values.motm}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                  placeholder="Man of the Match"
                  className="rounded-md bg-[#0e0f0f] px-4 py-2"
                  id="motm"
                  name="motm"
                  type="text"
                />
                 {formik.errors.motm && formik.touched.motm && (<p className="text-red-600">{formik.errors.motm}</p>)}
              </div>
            </div>
            <div className="flex space-x-8">
              <div className="space-x-3">
                <label htmlFor="position">Position</label>
                <select
                value={formik.values.position}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                  name="position"
                  id="position"
                  className="rounded-md bg-[#0e0f0f] px-4 py-2"
                >
                  <option value="" hidden>
                    Select Positon
                  </option>
                  <option>Goal Keeper</option>
                  <option>Right Winger</option>
                  <option>Left Winger</option>
                  <option>Center Back</option>
                </select>
                {formik.errors.position && formik.touched.position && (<p className="text-red-600">{formik.errors.position}</p>)}
              </div>
              <div className="space-x-3">
                <label htmlFor="teamName">Team Name:</label>
                <select
                value={formik.values.teamName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                  className="rounded-md bg-[#0e0f0f] px-4 py-2"
                  id="teamName"
                  name="teamName"
                >
                  <option value="" hidden>
                    Select Team
                  </option>
                  {teams.map((team) => (
                    <option key={team.id} value={team.id}>
                      {team.name}
                    </option>
                  ))}
                </select>
                {formik.errors.teamName && formik.touched.teamName && (<p className="text-red-600">{formik.errors.teamName}</p>)}
              </div>
            </div>
            <div className="flex flex-row justify-end space-x-5">
              <button
               onClick={() => navigate('/players')}
              className="rounded-md bg-[#ecd706] px-4 py-2 text-black">
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

export default AddPlayer;
