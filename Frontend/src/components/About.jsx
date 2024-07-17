import { motion } from "framer-motion";
import teamImage from "./Team.png";
import missionImage from "./mission.png";
import visionImage from "./vision.png";
// import backgroundImage from "./bookstore.png";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-8">
          Welcome to BookStore! We are passionate about books and committed to
          bringing you the best literary experience.
        </p>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
          <img
            src={teamImage}
            alt="Team"
            className="w-full h-50 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Our Team</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Our team is composed of passionate book lovers who are dedicated to
            providing the best selection of books for all readers.
          </p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
          <img
            src={missionImage}
            alt="Mission"
            className="w-full h-50 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Our mission is to foster a love for reading by offering a wide
            variety of books and promoting literacy within our community.
          </p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
          <img
            src={visionImage}
            alt="Vision"
            className="w-full h-50 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Our vision is to be the leading online bookstore, known for our
            exceptional collection of books and outstanding customer service.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
