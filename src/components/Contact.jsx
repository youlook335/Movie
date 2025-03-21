import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    setSubmitted(true);

    // Reset Form After Submission
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className="p-10 bg-gray-900 text-white min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-5 text-center">Contact Us 📩</h1>
      <p className="text-lg text-gray-300 max-w-2xl text-center mb-6">
        Have any questions or suggestions? Feel free to reach out to us!
      </p>

      {submitted ? (
        <p className="text-green-400 text-lg font-semibold">✅ Message Sent Successfully!</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Your Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Your Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-3 h-32 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-lg"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
