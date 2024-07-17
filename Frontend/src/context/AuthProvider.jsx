import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

// PropTypes validation
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
