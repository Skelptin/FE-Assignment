"use client"

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import './Form.css'

export default function Forms() {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    username: "",
    email: "",
    password: ""
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(8, "Password must be at least 8 characters long").required("Password is required")
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <div className="flex justify-center text-white">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange }) => (
          <Form className="flex flex-col gap-2 sm:w-full md:w-3/4 lg:w-2/4 xl:w-1/3 form bg-green-600 m-5 p-5 rounded-lg shadow-md ">
            <h1 className="h1 text-black font-extrabold text-center text-2xl m-2">Signup</h1>

            <label className="text-black">Username</label>
            <Field
              type="text"
              name="username"
              placeholder="Username"
              className={`p-2 rounded-md border-gray-300 text-black text-sm ${errors.username && touched.username ? 'border-red-500' : ''}`}
            />
            <ErrorMessage name="username" component="p" className="text-red-600 text-sm" />

            <label className="text-black">Email</label>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className={`p-2 rounded-md border-gray-300 text-black text-sm ${errors.email && touched.email ? 'border-red-500' : ''}`}
            />
            <ErrorMessage name="email" component="p" className="text-red-600 text-sm" />

            <label className="text-black">Password</label>
            <div className="relative">
              <Field
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                className={`p-2 pr-8 w-full rounded-md text-black border-gray-300 text-sm ${errors.password && touched.password ? 'border-red-500' : ''}`}
              />
              <button
                type="button"
                className="absolute inset-y-0  flex text-black items-center right-0 mr-2 focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
            <ErrorMessage name="password" component="p" className="text-red-600 text-sm" />

            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 text-sm">
              Submit
            </button>
            <p className="text-blue-300 text-sm">Already have an account?</p>
          </Form>
        )}
      </Formik>
    </div>
  );
}
