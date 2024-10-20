import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResultForm = () => {
  const [formData, setFormData] = useState({
    passport: "",
    listening: "",
    reading: "",
    writing: "",
    speaking: "",
    overall: "",
    dob: "",
    candidateName: "",
    candidateNum: "",
    centreNum: "",
    testDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://uk-backend-oulb.onrender.com/api/results",
        formData
      );
      toast.success(response.data.message);
    } catch (err) {
      toast.error("Error saving result. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Submit Result</h1>
      <form onSubmit={handleSubmit}>
        {[
          { label: "Passport", name: "passport", type: "text" },
          { label: "Listening", name: "listening", type: "number" },
          { label: "Reading", name: "reading", type: "number" },
          { label: "Writing", name: "writing", type: "number" },
          { label: "Speaking", name: "speaking", type: "number" },
          { label: "Overall", name: "overall", type: "number" },
          { label: "Date of Birth", name: "dob", type: "date" },
          { label: "Candidate Name", name: "candidateName", type: "text" },
          { label: "Candidate Number", name: "candidateNum", type: "text" },
          { label: "Centre Number", name: "centreNum", type: "text" },
          { label: "Test Date", name: "testDate", type: "date" },
        ].map((field) => (
          <div key={field.name} className="mb-4">
            <label
              htmlFor={field.name}
              className="block text-gray-700 font-semibold mb-2"
            >
              {field.label}
            </label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
        >
          Submit Result
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ResultForm;
