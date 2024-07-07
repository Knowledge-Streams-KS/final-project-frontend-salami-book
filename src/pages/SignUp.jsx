import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Formik, Field, Form, ErrorMessage } from "formik";
import signupSchema from "../validations/FormValidation.js";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const { name, email, password } = values;
      console.log("Form values:", values); // Log form values for debugging
      const response = await signup(name, email, password);

      if (response && response.status === 201) {
        console.log("Form submitted successfully:", name, email, password);
        navigate("/login");
      } else if (response && response.status === 400) {
        setFieldError("email", "User with this email already exists");
      }
    } catch (error) {
      navigate("/signup");
      console.error("Error signing up:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={signupSchema}
      onSubmit={handleSubmit}
    >
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-md rounded bg-white p-6 shadow-md">
          <h2 className="mb-6 text-center text-3xl font-semibold text-green-800">
            Sign Up
          </h2>
          <Form>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <Field
                type="text"
                name="name"
                className="w-full rounded-md border px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <ErrorMessage
                name="name"
                component="p"
                className="mt-2 text-red-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email Address</label>
              <Field
                type="email"
                name="email"
                className="w-full rounded-md border px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <ErrorMessage
                name="email"
                component="p"
                className="mt-2 text-red-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <Field
                type="password"
                name="password"
                className="w-full rounded-md border px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <ErrorMessage
                name="password"
                component="p"
                className="mt-2 text-red-600"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-green-800 py-2 text-white transition duration-300 hover:bg-green-600"
            >
              Sign Up
            </button>
          </Form>
          <div className="mt-4 text-center">
            <Link to="/login" className="text-green-800">
              Already have an account? Sign In
            </Link>
          </div>
        </div>
      </div>
    </Formik>
  );
};

export default SignUp;
