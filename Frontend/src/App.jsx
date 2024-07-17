// import React from "react";
// import Home from "./home/Home";
// import { Navigate, Route, Routes } from "react-router-dom";
// import Courses from "./courses/Courses";
// import Signup from "./components/Signup";
// import { Toaster } from "react-hot-toast";
// import { useAuth } from "./context/AuthProvider";

// function App() {
//   const [authUser, setAuthUser] = useAuth();
//   console.log(authUser);
//   return (
//     <>
//       <div className="dark:bg-slate-900 dark:text-white">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route
//             path="/course"
//             element={authUser ? <Courses /> : <Navigate to="/signup" />}
//           />
//           <Route path="/signup" element={<Signup />} />
//         </Routes>
//         <Toaster />
//       </div>
//     </>
//   );
// }

// export default App;

import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  const [authUser] = useAuth();

  return (
    <div className="bg-white dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/course"
          element={authUser ? <Courses /> : <Navigate to="/signup" />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/contact"
          element={authUser ? <Contact /> : <Navigate to="/signup" />}
        />
        <Route
          path="/about"
          element={authUser ? <About /> : <Navigate to="/signup" />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
