import { useState } from "react";
import InputField from "./InputField";

function Form() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
   <div className="flex items-center justify-center min-h-screen bg-sky-400 px-4">
  <form
    onSubmit={handleSubmit}
    className="w-full max-w-md bg-gray-50 p-6 sm:p-8 rounded-lg shadow-lg"
  >
    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
      Email-Form
    </h2>

    <InputField
      label="Email"
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
    />

    <InputField
      label="Password"
      type="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
    />

    <InputField
      label="Confirm Password"
      type="password"
      name="confirmPassword"
      value={formData.confirmPassword}
      onChange={handleChange}
    />

    <button
      type="submit"
      className="mt-4 w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition duration-300"
    >
      Submit
    </button>
  </form>
</div>

  );
}

export default Form;
