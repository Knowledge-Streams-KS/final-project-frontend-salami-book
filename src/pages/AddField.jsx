import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router";
import addFieldSchema from "../validations/FieldSchema";
import axiosInstance from "../axios/axios";

const AddField = () => {

    const navigate = useNavigate()

    const onSubmit = async (values, actions) => {
        actions.setSubmitting(true); 
      
        try {
          console.log("Form values:", values);
          const response = await axiosInstance.post('/field', values);
      
          if (response && response.status === 200) {
            console.log("Form submitted successfully:", values);
            setTimeout(() => {
              actions.resetForm();
              navigate('/fields');
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
            fieldName: '',
            fieldRate: '',
            fieldLongitude: '',
            fieldLatitude: '',
            fieldDescription: ''
        },
        validationSchema: addFieldSchema,
        onSubmit
    })

  return (
    <>
      <div className="flex flex-col items-center space-y-10 py-20">
        <div className="text-7xl">Add Field</div>
        <div className="rounded-md bg-[#232727] px-10 py-5">
          <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-5">
            <div className="flex justify-between">
              <div className="space-x-3">
                <label htmlFor="fieldName">Field Name:</label>
                <input
                value={formik.values.fieldName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                  placeholder="Field Name"
                  className="rounded-md bg-[#0e0f0f] px-4 py-2"
                  id="fieldName"
                  name="fieldName"
                  type="text"
                />
                {formik.errors.fieldName && formik.touched.fieldName && (<p className="text-red-600">{formik.errors.fieldName}</p>)}
              </div>
            </div>

            <div className="flex space-x-6">
              <div className="space-x-3">
                <label htmlFor="fieldRate">Field Rate:</label>
                <input
                value={formik.values.fieldRate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                  placeholder="Field Rate/hrs"
                  className="rounded-md bg-[#0e0f0f] px-4 py-2"
                  id="fieldRate"
                  name="fieldRate"
                  type="text"
                />
                {formik.errors.fieldRate && formik.touched.fieldRate && (<p className="text-red-600">{formik.errors.fieldRate}</p>)}
              </div>
              <div className="space-x-3">
                <label htmlFor="FieldLongitude">Field Longitude:</label>
                <input
                value={formik.values.fieldLongitude}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                  placeholder="Field Longitude"
                  className="rounded-md bg-[#0e0f0f] px-4 py-2"
                  id="fieldLongitude"
                  name="fieldLongitude"
                  type="text"
                />
                {formik.errors.fieldLongitude && formik.touched.fieldLongitude && (<p className="text-red-600">{formik.errors.fieldLongitude}</p>)}
              </div>
              <div className="space-x-3">
                <label htmlFor="fieldLatitude">Field Latitude:</label>
                <input
                value={formik.values.fieldLatitude}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                  placeholder="Field Latitude"
                  className="rounded-md bg-[#0e0f0f] px-4 py-2"
                  id="fieldLatitude"
                  name="fieldLatitude"
                  type="text"
                />
                {formik.errors.fieldLatitude && formik.touched.fieldLatitude && (<p className="text-red-600">{formik.errors.fieldLatitude}</p>)}
              </div>
            </div>

            <div className="space-x-3 flex items-center">
              <label className="w-32" htmlFor="fieldDescription">Field Description:</label>
              <textarea
              value={formik.values.fieldDescription}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
                placeholder="Field Description"
                className="rounded-md bg-[#0e0f0f] px-4 py-2 w-full"
                id="fieldDescription"
                name="fieldDescription"
              />
              {formik.errors.fieldDescription && formik.touched.fieldDescription && (<p className="text-red-600">{formik.errors.fieldDescription}</p>)}
            </div>

            <div className="flex flex-row justify-end space-x-5">
              <button
              onClick={() => navigate('/fields')}
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

export default AddField;
