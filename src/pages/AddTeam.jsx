import React from "react";
import { useFormik } from "formik";
import addTeamSchema from "../validations/TeamSchema";
import axiosInstance from "../axios/axios";
import { useNavigate } from "react-router";

const AddTeam = () => {

    const navigate = useNavigate();

    const onSubmit = async (values, actions) => {
        actions.setSubmitting(true); 
      
        try {
          console.log("Form values:", values);
          const response = await axiosInstance.post('/team', values);
      
          if (response && response.status === 200) {
            console.log("Form submitted successfully:", values);
            setTimeout(() => {
              actions.resetForm();
              navigate('/teams');
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
            teamName: '',
            teamDivision: ''
        },
        validationSchema: addTeamSchema, 
        onSubmit
    })

  return (
    <>
      <div className="flex flex-col items-center space-y-10 py-20">
        <div className="text-7xl">Add Team</div>
        <div className="rounded-md bg-[#232727] px-10 py-5">
          <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-5">
            <div className="space-y-5">
              <div className="space-x-3">
                <label htmlFor="teamName">Team Name:</label>
                <input
                  value={formik.values.teamName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Team Name"
                  className="rounded-md bg-[#0e0f0f] px-4 py-2"
                  id="teamName"
                  name="teamName"
                  type="text"
                />
                {formik.errors.teamName && formik.touched.teamName && (<p className="text-red-600">{formik.errors.teamName}</p>)}
              </div>
              <div className="space-x-3">
                <label htmlFor="teamDivision">Team Division: </label>
                <select
                value={formik.values.teamDivision}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                  className="rounded-md bg-[#0e0f0f] px-4 py-2"
                  id="teamDivision"
                  name="teamDivision"
                >
                    <option value='' hidden>Select Division</option>
                    <option value='A'>A</option>
                    <option value='B'>B</option>
                    <option value='C'>C</option>
                </select>
                {formik.errors.teamDivision && formik.touched.teamDivision && (<p className="text-red-600">{formik.errors.teamDivision}</p>)}
              </div>
            </div>
            <div className="flex flex-row justify-center space-x-5">
              <button
               onClick={() => navigate('/teams')}
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

export default AddTeam;
