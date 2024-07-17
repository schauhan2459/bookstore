// const Contact = () => {
//   return (
//     <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-8">
//       <div className="text-center">
//         <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
//         <p className="text-lg mb-8">
//           We had love to hear from you! Feel free to reach out using the details
//           below or use the form to send us a message.
//         </p>
//       </div>

//       <div className="flex flex-col md:flex-row gap-8">
//         <div className="md:w-1/2">
//           <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
//           <div className="flex items-center mb-4">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 mr-2 text-gray-500"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M10 2C5.589 2 2 5.589 2 10c0 2.066.783 3.958 2.072 5.4l.012.014c.16.197.38.376.64.554.762.504 1.73.886 2.785 1.16 1.13.282 2.303.426 3.49.426 1.187 0 2.36-.144 3.49-.426 1.055-.274 2.023-.656 2.785-1.16.26-.178.48-.357.64-.554l.012-.014C17.217 13.958 18 12.066 18 10c0-4.411-3.589-8-8-8zm0 2c3.683 0 6 2.61 6 6 0 .716-.146 1.424-.43 2.098l-.018.055-.03.092-.007.015c-.088.231-.207.463-.356.693-.18.306-.414.605-.679.898-.632.674-1.423 1.21-2.3 1.585-.817.375-1.697.566-2.59.566-.893 0-1.773-.19-2.59-.566-.877-.376-1.668-.911-2.3-1.585-.265-.293-.5-.592-.679-.898a4.585 4.585 0 0 1-.363-.654l-.007-.014-.03-.092-.018-.055C4.147 13.424 4 12.716 4 12c0-3.383 2.317-6 6-6zM9 14v2h2v-2H9zm2-4h2V6h-2v4z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             <span>Phone: +1 234 567 890</span>
//           </div>
//           <div className="flex items-center mb-4">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 mr-2 text-gray-500"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM5 10a5 5 0 0 1 7-4.582V7a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1a2 2 0 0 1-2 2H8a5 5 0 0 1-3-9zm8.965 3.026a5 5 0 1 1-1.06 1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             <span>Email: contact@bookstore.com</span>
//           </div>
//           <div className="flex items-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 mr-2 text-gray-500"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M13 2h5v5l-3-3-7 7-2-2 7-7-3-3zm2.748.356c.65.65.65 1.702 0 2.352l-1.88 1.88 2.352 2.352-1.476 1.476-2.352-2.352-1.88 1.88c-.65.65-1.702.65-2.352 0L4.58 7.434c-.65-.65-.65-1.702 0-2.352l8.117-8.117a1.658 1.658 0 0 1 2.352 0l1.476 1.476-2.352 2.352 1.88 1.88z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             <span>Address: 1234 Bookstore St, City, Country</span>
//           </div>
//         </div>
//         <div className="md:w-1/2">
//           <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
//           <form className="space-y-4">
//             <div className="flex flex-col">
//               <label htmlFor="name" className="text-lg font-medium">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="border rounded-md px-3 py-2 outline-none"
//                 placeholder="Enter your name"
//                 required
//               />
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="email" className="text-lg font-medium">
//                 Your Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="border rounded-md px-3 py-2 outline-none"
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="message" className="text-lg font-medium">
//                 Your Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows="5"
//                 className="border rounded-md px-3 py-2 outline-none"
//                 placeholder="Enter your message"
//                 required
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/message",
        formData
      );
      if (response.status === 201) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form after successful submission
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error sending message. Please try again later.");
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-8">
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
        <p className="text-lg mb-8">
          We had love to hear from you! Feel free to reach out using the details
          below or use the form to send us a message.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2C5.589 2 2 5.589 2 10c0 2.066.783 3.958 2.072 5.4l.012.014c.16.197.38.376.64.554.762.504 1.73.886 2.785 1.16 1.13.282 2.303.426 3.49.426 1.187 0 2.36-.144 3.49-.426 1.055-.274 2.023-.656 2.785-1.16.26-.178.48-.357.64-.554l.012-.014C17.217 13.958 18 12.066 18 10c0-4.411-3.589-8-8-8zm0 2c3.683 0 6 2.61 6 6 0 .716-.146 1.424-.43 2.098l-.018.055-.03.092-.007.015c-.088.231-.207.463-.356.693-.18.306-.414.605-.679.898-.632.674-1.423 1.21-2.3 1.585-.817.375-1.697.566-2.59.566-.893 0-1.773-.19-2.59-.566-.877-.376-1.668-.911-2.3-1.585-.265-.293-.5-.592-.679-.898a4.585 4.585 0 0 1-.363-.654l-.007-.014-.03-.092-.018-.055C4.147 13.424 4 12.716 4 12c0-3.383 2.317-6 6-6zM9 14v2h2v-2H9zm2-4h2V6h-2v4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Phone: +1 234 567 890</span>
          </div>
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16zM5 10a5 5 0 0 1 7-4.582V7a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1a2 2 0 0 1-2 2H8a5 5 0 0 1-3-9zm8.965 3.026a5 5 0 1 1-1.06 1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <span>Email: contact@bookstore.com</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M13 2h5v5l-3-3-7 7-2-2 7-7-3-3zm2.748.356c.65.65.65 1.702 0 2.352l-1.88 1.88 2.352 2.352-1.476 1.476-2.352-2.352-1.88 1.88c-.65.65-1.702.65-2.352 0L4.58 7.434c-.65-.65-.65-1.702 0-2.352l8.117-8.117a1.658 1.658 0 0 1 2.352 0l1.476 1.476-2.352 2.352 1.88 1.88z"
                clipRule="evenodd"
              />
            </svg>
            <span>Address: 1234 Bookstore St, City, Country</span>
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border rounded-md px-3 py-2 outline-none"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg font-medium">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border rounded-md px-3 py-2 outline-none"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="border rounded-md px-3 py-2 outline-none"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
